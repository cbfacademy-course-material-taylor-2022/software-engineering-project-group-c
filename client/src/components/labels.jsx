import React from 'react'


const obj =[
    {
        type:"Income",
        color:"#457B9D",
        percent: 40
    },
        {
        type: "Expense",
        color: "#E63946",
        percent: 60
        }

]

function labels() {
  return (
    <>
    {obj.map((v, i) => <LabelsComponent key={i} data={v}></LabelsComponent>)}    

    </>
    

  )
}

function LabelsComponent(){
    return(
       
        <div className='labelContainer'>
        <div className='name'>
            <div className='labelColor'></div>
            <div className='labelName'> Expense 40% </div>
        </div>
            
          
        </div>

        
    )
}

export default labels