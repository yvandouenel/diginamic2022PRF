import '../css/App.css';
import NavMain from './NavMain';
import { Routes, Route } from 'react-router-dom';
import Universities from './Universities';
import About from './About';


const App = () => {
  return (
    <div className='container'>

      <main>
        <Routes>
          <Route path="/" element={<Universities />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>


      <footer>
        <NavMain />
      </footer>
    </div>
  );
}

export default App;

