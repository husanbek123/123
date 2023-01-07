import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About_Us from './pages/About-Us';

function App() {
  return (
    <>
      <Navbar title="Hello World" />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About_Us />} />
      </Routes>
    </>
  );
}

export default App;
