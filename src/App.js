import './App.css';
import './components/Component.css';
import { Routes, Route } from 'react-router-dom';

// components
import About from './components/About/About';
import NavBar from './components/NavBar/Nav';
import InBars from './components/InBars';
import OutBars from './components/OutBars';
import Home from './components/Home/Home';
import Process from './components/Process/Process'
import Footer from './components/Footer/Footer';
import Privacy from './components/Privacy';

function App() {

  return (
    <body>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<Process />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <InBars/>
      <OutBars/>
      <Footer/>
    </body>
  );
}

export default App;
