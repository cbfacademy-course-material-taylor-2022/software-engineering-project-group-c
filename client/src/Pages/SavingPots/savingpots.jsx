import React from 'react'
import "../../CSS/Site.css"
import '../SavingPots/savingpots.css'
import Banner from '../../components/banner'
import SavingPot from '../../components/savingPot'



function savingpots() {
  return <>
      <div className='pagecontainer'>
        <div className='header'> <Banner name='Saving Pots'/></div>
        <div className='potContainer'>
         <SavingPot name={"Saving"} amount={"100"} max={"1000"}/>
         
        </div>
        
      </div>
     
  </>
        
   
    
}

export default savingpots;