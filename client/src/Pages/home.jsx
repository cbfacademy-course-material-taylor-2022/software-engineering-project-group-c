import React from 'react'
import "../CSS/Site.css"
import "../CSS/Home.css"


const home = () => {
  return (
    <> 
      <div className='mainContainer'>
        <div className='leftContainer'> 
          <div className='tracker'>Track Expenses</div>
          <div className='savingPots'> Saving Pots</div>
          <div className='Reports'> Reports</div>
          <div className='Tips'> </div>
        </div> 

        <div className='rightContainer'>
          <h1>FIN.ALLYY</h1>
          <p>Welcome to Fin.Ally your financial friend</p>
          <button> register</button>
          <button> register</button>
        </div>
     </div>
    </>
  )
}

export default home;