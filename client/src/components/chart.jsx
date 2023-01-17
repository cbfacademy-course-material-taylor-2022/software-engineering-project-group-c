import React from 'react'
import {Chart,ArcElement} from 'chart.js'
import {Doughnut} from 'react-chartjs-2'
import '../CSS/chart.css'

Chart.register(ArcElement)

const config = {
  data: {
      datasets: [{
      data: [300,100],
      backgroundColor: [
        'rgb(69, 123, 157)',
        'rgb(168, 218, 220)'
      ],
      hoverOffset: 4,
     }]
    }
}


function chart() {
  return (
    <div style={{width: '30%', height:'auto', marginLeft:'50%'}}>

    <Doughnut {...config}/>
    <div className='amount'>
       <h4>Total</h4>
    </div>
    </div>
  )
}

export default chart;