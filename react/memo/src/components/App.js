import '../css/App.css';
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dashboard from './dashboard/Dashboard';
import About from './about/About';
import Header from './common/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='container mt-2'>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
      <footer>
        <Link to="/about">A propos</Link> |{" "}
        <Link to="/">Dashboard</Link>
      </footer>
    </div>
  );
}

export default App;
