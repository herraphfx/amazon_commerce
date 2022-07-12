import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Login from './pages/Login';

function App() {
  return (
  <BrowserRouter>
    <div className='app'>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
      </div>
  </BrowserRouter>
    
     
  
   
  );
}

export default App;
