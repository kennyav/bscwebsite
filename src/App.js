import './App.css';
import './components/Component.css';
import { Routes, Route } from 'react-router-dom';

// components
import About from './components/About/About';
import NavBar from './components/Nav';
import InBars from './components/InBars';
import OutBars from './components/OutBars';
import Home from './components/Home';
import Link from './components/Link'

function App() {

  return (
    <body>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/link" element={<Link />} />
      </Routes>
      <InBars/>
      <OutBars/>
    </body>
  );
}

export default App;
