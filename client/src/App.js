
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/home';
import Login from './Pages/login';
import SavingPots from './Pages/savingpots';
import Registration from './Pages/registration';
import ContactUs from './Pages/contactUs';
import ExpenseTacker from './Pages/expenseTracker';
import SideMenu from './components/sideMenu';

function App() {
  return (
 
    <Router>
           
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />}/>
          </Routes>
          
          <SideMenu>  
          <Routes>
            <Route path="/SavingPots" element={<SavingPots/>}/>
            <Route path="/Registration" element={<Registration/>}/>
            <Route path="/ExpenseTracker" element={<ExpenseTacker/>}/>
            <Route path="/Reports" element={<ExpenseTacker/>}/>
            <Route path="/ContactUs" element={<ContactUs/>}/>
          </Routes>
          </SideMenu>
         
    </Router>

  );
}

export default App;