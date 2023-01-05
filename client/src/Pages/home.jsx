import React from 'react'
import "../CSS/Site.css"
import "../CSS/Home.css"


const home = () => {
  return (
    <> 
      <div className='mainContainer'>
        <div className='leftContainer'> 
          <div className='tracker'><img src="imgs/ExpenseTracker.png" alt="Puppy"/></div>
          <div className='savingPots'> Saving Pots</div>
          <div className='Reports'> Reports</div>
          <div className='Tips'> Tips </div>
        </div> 

        <div className='rightContainer'>
          <h1>FIN.ALLY</h1>
          <p>Welcome to Fin.Ally your financial friend</p>
          <button> login</button>
          <button> register</button>
        </div>
     </div>
    </>
  )
}

export default home;