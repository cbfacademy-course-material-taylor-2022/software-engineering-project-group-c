import React from 'react'
import * as FaIcons from "react-icons/fa"
import "../Pages/ExpenseTracker/expenceTracker.css"


const obj =[
    {   
        name:"salary",
        category:"Income",
        amount: "£4000",
        color:"#457B9D",

    },
        {
        name:"rent",
        category: "Expense",
        amount: "£1500",
        color: "#E63946",
        }

]

function expenseHistory() {
  return (
    <div>     
    {obj.map((v,i)=> <Transaction category={v}> </Transaction> )}
    </div>
    
  )
}


function Transaction({category}){
    if(!category) return null;
    return(
        <div>
        <button className='trash'> <FaIcons.FaTrashAlt/></button>
        <span className=''>{category.name ?? ''} {category.amount} </span>  
        </div>)
}
export default expenseHistory