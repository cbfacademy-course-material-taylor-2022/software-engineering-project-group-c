import React from 'react';
import "../CSS/Site.css";
import "../CSS/registration.css";
import LogoBanner from '../components/logoBanner';
import Button from '../components/button'
import { Link } from 'react-router-dom'


function Registration() {

  return(
    <div className='mainContainer'>
        <div className='leftContainer'> 
        </div>
        <div className='rightContainer'>
          <LogoBanner />
          <div className='loginForm'>
            <form>
            <div>
              <h1>Registration</h1>
            </div>
              <input 
              type="text" 
              name="firstName"
              placeholder='First Name:'
              />
              <input 
              type="text" 
              name="Surname"
              placeholder='Surname:'
             />   
              <input 
              type="text" 
              name="email"
              placeholder='Email:'
             />
              <input 
              type="text" 
              name="Password"
              placeholder='Password:'
             />    
             <Button name="Register" />
             <span>
             Already have an account? Login <Link to='/Login'>here</Link>

             </span>
            </form>
          </div>
          <div>

          </div>
        </div>
  </div>

)}

export default Registration;