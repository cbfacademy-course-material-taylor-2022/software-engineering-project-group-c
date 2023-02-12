import React from 'react'
import {Chart,ArcElement} from 'chart.js'
import {Doughnut} from 'react-chartjs-2'
import '../CSS/chart.css'
import '../CSS/Site.css'
import Labels from '../components/labels'

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
      borderRadius:20,
      spacing:5
     }]
    },
    options:{
      cutout:130    
    }
  }


function chart() {
  return (
    <div className='chartContainer'>
      <div className='chart'>
        <Doughnut {...config}/>
         <h3 className='amount' >Total
         <span className='value'> £{0}</span></h3>
      </div>
      
      <div className='Labels'>
        <Labels />
      </div>
    </div>
  )
}

export default chart;