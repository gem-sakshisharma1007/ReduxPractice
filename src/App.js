import React from 'react'
import Login from './Components/Login/Login'
import "./App.css";
import Logout from './Components/Logout/Logout';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import { useSelector } from 'react-redux';
import { selectUser } from './features/Userslice';






const App = () => {
  const user = useSelector(selectUser);
  


  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route exact path="/" element={user ? <Logout /> : <Login />} />
      <Route exact path="/about" element={<About />} />

      </Routes>
      </Router>

    </>
    
  
        
      
  
   
  
    
  
  
  );
};

export default App
