import React from 'react'
import "../../CSS/Site.css"
import "../ExpenseTracker/expenceTracker.css"
import Chart from "../../components/chart"
import Button from '../../components/button'
import Banner from '../../components/banner'
import Transaction from '../../components/expenseHistory'

function expenseTracker() {

  return (
        
    <div className='pagecontainer'>
      <div className='header'>
        <Banner name='Expense Tracker'/> 
      </div>
      <div className='expenseIncomeContainer'>
        <div className='visualData'>
          <div className='Chart'>
            <Chart />            
           </div>
        </div>
        <div className='incomeExpenseData'>
            <div className='expenseHistory'>
            <h2> Expense History</h2>
            <Transaction />

            </div>
            <div className='expenseFormContainer'>
            
            <form className='expenseForm'>
                  <h2> Income/Expense form</h2>
                  <input className='formInput' 
                    type="text"
                    placeholder='Salary, House Rend, SIP'
                  />               
                  <select className='formInput'>
                      <option value="Income" defaultValue>Income</option>
                      <option value="Expense">Expense</option>      
                  </select>
                  
                  <input type="text"  
                    placeholder='Amount' 
                    className='formInput' 
                  />
                  <div className="submitBtn">
                    <Button name='Make Transaction' />
                  </div>   
          </form>
            </div>
        </div>
      </div>
    </div>
   
  )
}

export default expenseTracker;