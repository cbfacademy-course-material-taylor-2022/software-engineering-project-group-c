import React, { children } from 'react'
import { NavLink } from 'react-router-dom'
import * as FaIcons from "react-icons/fa"
import * as HiIcons from "react-icons/hi"
import '../CSS/Site.css'
import Logo from './logo'




const sideMenu = ({children}) => {
     const menuItem=[
              {
                path:"/ExpenseTracker",
                name:"Expense Tracker",
                icon: <FaIcons.FaChartPie />
              },
              {
                path:"/SavingPots",
                name:"Saving Pots",
                icon: <FaIcons.FaPiggyBank />

              },
              {
                path:"/Reports",
                name:"Reports",
                icon: <HiIcons.HiOutlineDocumentReport />
              },
              {
                path:"/ContactUs",
                name:"Contact Us",
                icon: <FaIcons.FaHandsHelping />
              },


     ]
     
     
     return(
        <div className='mainContainer'>
          <div className="sideBar">
            <div className='menuLogo'> 
               <Logo />
            </div>
            {
              menuItem.map((item,index)=>(
                <NavLink to={item.path} key={index} className= "link" activeclassname="active">
                   <div className='icon'>{item.icon}</div>
                   <div className='link_name'>{item.name}</div>
                </NavLink>
              ))
            }
              
          </div>
          <main> {children}</main>
        </div>
      
     )
    
};

export default sideMenu;