import { useRef, useState, useEffect } from "react";
import "../../CSS/Site.css"
import Chart from "../../components/chart"
import { Data } from "../../utils/data";

function Reports (props){
 //const amounts=Data.map(item=>parseFloat(item.Amount.replace('£','').trim()));

    return (
    
        <div className='pagecontainer'>
        <div className='header'> Header</div>
        
         <div className='chartContainer'>
          <div className='Chart'>
             <Chart/>
          </div>
          <div className='labels'>
            <h3> labels</h3>
          </div>
        </div>
        </div>
        
)};


export default Reports