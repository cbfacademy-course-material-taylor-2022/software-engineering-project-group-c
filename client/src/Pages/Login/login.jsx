import React from 'react'
import "../../CSS/Site.css"
import "../../Pages/Login/login.css"
import LogoBanner from '../../components/logoBanner'
import Button from '../../components/button'
import { Link } from 'react-router-dom'

const login = () => {

 return (
    <div className='mainContainer'>
        <div className='leftContainer'> 
        </div>
        <div className='rightContainer'>
          <LogoBanner />
          <div className='FormContainer'>
            <form className='loginForm'>
            <div>
              <h1 className='loginFormHeader'>Login</h1>
            </div>
              <input className='loginFormInput'
              type="text" 
              name="username"
              placeholder='Username'
             />   
              <input className='loginFormInput'
              type="password" 
              name="password"
              placeholder='Password'
             />  
             <div className='loginFormButton'>
                 <Button name="Sign in" />         
            </div>  
            <span className='reroute'>
                  New customer? register <Link to='/Registration'>here</Link>
            </span>
            </form>
          </div>
          <div>

          </div>
        </div>
    </div>
  )}

export default login