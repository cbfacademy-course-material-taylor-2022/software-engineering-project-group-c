import React from 'react'
import { Link } from 'react-router-dom'
import "../CSS/Site.css"
import "../CSS/Home.css"
import * as FavIcons from 'react-icons/fa'


const home = () => {
  return (
    <> 
      <div className='mainContainer'>
        <div className='leftContainer'> 
          <h1 className='featuresTitle'>Features</h1>
          
          <div className='row'>        
            <div className='tracker'>
              <img src="imgs/ExpenseTracker.png" alt="Tracker"/>
            </div>
            <div className='savingPots'><img src="imgs/SavingPot.png" alt="Tracker"/></div>
          </div>
          <div className='row'>    
            <div className='Reports'><img src="imgs/Reports.png" alt="Tracker"/> </div>
            <div className='Tips'> <img src="imgs/ExpenseTracker.png" alt="Tracker"/> </div>
          </div>  
          <div className='contactRouteLink'>
            <Link to='/contactUs' className='home_btn'> Contact Us </Link>
          </div>
          
        </div> 

        <div className='rightContainer'>
         <div className='logo'>
            <img className='imglogo' src="imgs/logo.png" alt="Tracker"/>
            <p className='logoSlogan'>Welcome to Fin.Ally your financial friend</p>
         </div>
          
        
          <div className='loginRouteLink'>
             <Link to='/Login' className='home_btn1'> Login</Link>
          </div>   
          <div className='regRouteLink'>
             <Link to='/Registration' className='home_btn'> Register</Link>
          </div>
          <div className='homeIcons'>
          <FavIcons.FaInstagram className='icons'/>
          <FavIcons.FaLinkedin className='icons' />
          </div>
          
        </div>
     </div>
    </>
  )
}

export default home;