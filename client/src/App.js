
import React from 'react'
import {Navigate, Outlet, createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './Pages/Home/home';
import Login from './Pages/Login/login';
import Registration from './Pages/Registration/registration';
import SavingPots from './Pages/SavingPots/savingpots';
import ContactUs from './Pages/ContactUs/contactUs';
import ExpenseTacker from './Pages/ExpenseTracker/expenseTracker';
import Reports from './Pages/Reports/reports'
import SideMenu from './components/sideMenu';
import './CSS/Site.css'
/** Need to refactor how sideMenu is called so that it doesn't have to be called multiple times  **/

function App() {
const currentUser =true;

  const Layout = () =>{
    return(
       <div>
          <SideMenu />
          <Outlet /> 
      </div>
    )

  }

  const ProtectedRoute =({children})=>{
    if(!currentUser){
        return<Navigate to='/'/>
      }
      return children;
  }
 
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home />
    },
    {
      path:"/Login",
      element:<Login />
    },
    {
      path:"/Registration",
      element:<Registration />
    },
    {
      path:"/",
      element:<ProtectedRoute> <Layout /> </ProtectedRoute>,
      children:[
        {
          path:"/ExpenseTracker",
          element:<ExpenseTacker />,
        },
        {
          path:"/SavingPots",
          element:<SavingPots />,
        },
        {
          path:"/Reports",
          element:<Reports />,
        },
        {
          path:"/ContactUs",
          element:<ContactUs />
        },
      ]
    },

  ])

  return ( 
    
 <RouterProvider router={(router)}/>

  );
}

export default App;




