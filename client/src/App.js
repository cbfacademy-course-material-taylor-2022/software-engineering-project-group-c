
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/home';
import Login from './Pages/login';
import SavingPots from './Pages/savingpots';
import Registration from './Pages/registration'


function App() {
  return (
 <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />}/>
        <Route path="/SavingPots" element={<SavingPots/>}/>
        <Route path="/Registration" element={<Registration/>}/>
      </Routes>
 </Router>
  );
}

export default App;