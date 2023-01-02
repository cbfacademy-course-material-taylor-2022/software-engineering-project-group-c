
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/home';
import Login from './Pages/login';
import Reg from './Pages/registration';
import SavingPots from './Pages/savingpots';


function App() {
  return (
 <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />}/>

      </Routes>
 </Router>
  );
}

export default App;