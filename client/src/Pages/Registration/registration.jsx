import React from 'react';
import "../../CSS/Site.css"
import "../../Pages/Registration/registration.css"
import LogoBanner from '../../components/logoBanner'
import Button from '../../components/button'
import { Link } from 'react-router-dom'


function Registration() {



  
  return(
    <div className='mainContainer'>
        <div className='leftContainer'> 
        </div>
        <div className='rightContainer'>
          <LogoBanner />
          <div className='FormContainer'>
            <form className='regForm'>
            <div>
              <h1>Registration</h1>
            </div>
              <input className='regFormInput'
              type="text" 
              name="firstName"
              placeholder='First Name:'
              />
              <input className='regFormInput'
              type="text" 
              name="Surname"
              placeholder='Surname:'
             />   
              <input className='regFormInput'
              type="text" 
              name="email"
              placeholder='Email:'
             />
              <input className='regFormInput'
              type="text" 
              name="Password"
              placeholder='Password:'
             /> 
             <div className='regFormButton'   >
             <Button name="Register" />

            </div>
            <span className='reroute'> Already have an account? Login <Link to='/Login'>here</Link></span>
            </form>
          </div>
          <div>

          </div>
        </div>
  </div>

)}

export default Registration;