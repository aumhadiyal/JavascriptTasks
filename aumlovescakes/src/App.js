import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import FncComponent from './FncComponent';
import ClsComponent from './ClsComponent';
import Sum from './SumUsingForm';
import Counter from './Counter';
import CounterLocalStorage from './CounterLocalStorage';
import MiniCalc from './MiniCalc';
import ValidationForm from './ValidationForm';
import SumHooks from './SumHooks';
import SumHooksObject from './SumHooksObject';
function App() {
  return (
    // <Router>        
    // <Link to="/">Home</Link> | 
    // <Link to="/about">About</Link> | 
    // <Link to="/contact">Contact</Link>|
    // <Link to="/fnc">Fnc</Link>|
    // <Link to="cls">Cls</Link>

      
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path='/fnc' element={<FncComponent />} />
    //     <Route path='/cls' element={<ClsComponent />} />
        
    //   </Routes>
    // </Router>
    //<Sum/>
    //<Counter/>
    //<CounterLocalStorage/>
    //<MiniCalc/>
    //< ValidationForm/>
    //<SumHooks/>
    //<SumHooksObject/>
  );
}

export default App;
