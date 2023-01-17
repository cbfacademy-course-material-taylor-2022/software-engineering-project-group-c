import React from 'react'
import "../../CSS/Site.css"
import "../ExpenseTracker/expenceTracker.css"
import Chart from "../../components/chart"

function expenseTracker() {
  return (
        
    <div className='container'>
    <div className='header'> Header</div>
    
     <div className='chartContainer'>
      <div className='Chart'>
         <Chart />
      </div>
      <div className='labels'>
        <h3> labels</h3>
      </div>
    </div>
    </div>
   
  )
}

export default expenseTracker;