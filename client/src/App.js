
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/home';
import Login from './Pages/login';
import SavingPots from './Pages/savingpots';
import Registration from './Pages/registration';
import ContactUs from './Pages/contactUs';
import ExpenseTacker from './Pages/expenseTracker';
import Reports from './Pages/reports'
import SideMenu from './components/sideMenu';

/** Need to refactor how sideMenu is called so that it doesn't have to be called multiple times  **/

function App() {
  return (
 
    <Router>
           
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />}/>
            <Route path="/Registration" element={<Registration/>}/>
            <Route path="/SavingPots" element={<div>
              <SideMenu />
              <SavingPots/>
            </div>}/>            
            <Route path="/ExpenseTracker" element={<div>
              <SideMenu />
              <ExpenseTacker/>
            </div> }/>
            <Route path="/Reports" element={<div>
              <SideMenu />
              <Reports />
            </div>}/>
            <Route path="/ContactUs" element={<ContactUs/>}/>
          </Routes>
    </Router>

  );
}

export default App;