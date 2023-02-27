import React from 'react'
import { Link } from 'react-router-dom'
import "../../CSS/Site.css"
import "../Home/Home.css"
import * as FavIcons from 'react-icons/fa'
import LogoBanner from '../../components/logoBanner'
import Button from '../../components/button'


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
            <Link to='/contactUs' > <Button name='Contact Us' /> </Link>
          </div>
          
        </div> 

        <div className='rightContainer'>
   
          <LogoBanner />
        
          <div className='loginRouteLink'>
             <Link to='/Login'> <Button name='Login' /></Link>
          </div>   
          <div className='regRouteLink'>
             <Link to='/Registration' > <Button className='btn1' name='Registration' /></Link>
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