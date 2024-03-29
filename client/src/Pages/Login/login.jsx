import React from 'react'
import "../../CSS/Site.css"
import "../../Pages/Login/login.css"
import LogoBanner from '../../components/logoBanner'
import Button from '../../components/button'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { userLogin } from "../../services/loginService";

const Login = () => {

  const {register, handleSubmit} = useForm()

  const navigate = useNavigate();

  const onSubmit = async (formValues) => {
    // console.log(firstName)
    const user =  await userLogin(formValues.email, formValues.password);
    if (user === "success") {
      navigate("/ExpenseTracker");
      
  }
}

 return (
    <div className='mainContainer'>
        <div className='leftContainer'> 
        </div>
        <div className='rightContainer'>
          <LogoBanner />
          <div className='FormContainer'>
            <form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h1 className='loginFormHeader'>Login</h1>
            </div>
              <input className='loginFormInput'
              type="email" 
              {...register('email')}
              placeholder='Email'
             />   
              <input className='loginFormInput'
              type="password" 
              {...register('password')}
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

export default Login