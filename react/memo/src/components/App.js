import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dashboard from './dashboard/Dashboard';
import About from './about/About';
import Header from './common/Header';
import MemopusData from '../services/MemopusData';
import { useEffect } from 'react';

function App() {
  // Equivalent du componentDidMount
  useEffect(() => {
    try {
      // Appel du token
      async function getToken() {
        await MemopusData.getToken();
        console.log(`token`, MemopusData.token);
      }
      getToken();
    } catch (error) {
      console.error(`Erreur attrapée dans App`, error);
    }


  }, [])
  return (
    <div className="App">
      <Header />
      <main className='container mt-2'>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
      <footer className='mt-4'>
        <Link to="/about">A propos</Link> |{" "}
        <Link to="/">Dashboard</Link>
      </footer>
    </div>
  );
}

export default App;
