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
          <div className='loginForm'>
            <form>
            <div>
              <h1>Login</h1>
            </div>
              <input 
              type="text" 
              name="username"
              placeholder='Username'
             />   
              <input 
              type="text" 
              name="password"
              placeholder='Password'
             />    
             <Button name="Sign in" />
             <span>
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