import React from 'react'
import Login from './Components/Login/Login'
import "./App.css";
import Logout from './Components/Logout/Logout';

import { useSelector } from 'react-redux';
import { selectUser } from './features/Userslice';






const App = () => {
  const user = useSelector(selectUser);
  


  return (
    
   
    <div>
      {user ? <Logout /> : <Login />} 
     
  </div>
  
    
  
  
  );
};

export default App
