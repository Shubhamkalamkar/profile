import './App.css';
import{Route, Routes} from 'react-router-dom'
import Home from './PortfolioContainer/Home/Home';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
    
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path="/contact" element={<ContactMe/>}/>
     <Route path='/about' element={<AboutMe/>}/>
     </Routes>
    </div>
  );
}

export default App;
