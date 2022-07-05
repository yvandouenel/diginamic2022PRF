import '../css/App.css';
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dashboard from './dashboard/Dashboard';
import About from './About';

function App() {
  return (
    <div className="App">
      <h1>Memo</h1>
      <main className='container'>
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
