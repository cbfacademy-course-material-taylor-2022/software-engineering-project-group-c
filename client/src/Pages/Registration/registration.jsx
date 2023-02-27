import {useForm} from 'react-hook-form'
import "../../CSS/Site.css"
import "../../Pages/Registration/registration.css"
import LogoBanner from '../../components/logoBanner'
import Button from '../../components/button'
import { Link } from 'react-router-dom'
import { registerUser } from "../../services/userService";

function Registration() {
 
  const {register, handleSubmit} = useForm()

  const onSubmit = async (formValues) => {
    // console.log(firstName)
    const createUser =  await registerUser(formValues.firstName, formValues.lastName, formValues.email, formValues.password);
    if (createUser === "success") {
      alert("Account Successfully Created");
  }
}
  
  return(
    <div className='mainContainer'>
        <div className='leftContainer'> 
        </div>
        <div className='rightContainer'>
          <LogoBanner />
          <div className='FormContainer'>
            <form onSubmit ={handleSubmit(onSubmit)}>
            <div>
              <h1>Registration</h1>
            </div>
              <input className='regFormInput'
              type="text" 
              {...register('firstName')}
              placeholder='First Name:'
              />
              <input className='regFormInput'
              type="text" 
              {...register('lastName')}
              placeholder='Last Name:'
             />   
              <input className='regFormInput'
              type="email" 
              {...register('email')}
              placeholder='Email:'
             />
              <input className='regFormInput'
              type="password" 
              {...register('password')}
              placeholder='password:'
             /> 
             <div className='regFormButton'   >
             <Button type="submit" name="Register" />

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