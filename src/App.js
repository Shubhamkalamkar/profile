import './App.css';
import{Route, Routes} from 'react-router-dom'
import Home from './PortfolioContainer/Home/Home';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';

function App() {
  return (
    <div className="App">
    
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path="/contact" element={<ContactMe/>}/>
     </Routes>
    </div>
  );
}

export default App;
