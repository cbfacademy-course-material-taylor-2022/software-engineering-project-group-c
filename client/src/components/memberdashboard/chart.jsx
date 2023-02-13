import { useReducer } from "react";
import "../css/component/chart.css"
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

function Chart ({title, data, dataKey, grid}) {
    return (
     <div className="chart">
     <h3 className="chartTitle">{userData.name}'s Member's Dashboard</h3>
     <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
            <XAxis dataKey="Account Balance" stroke="#E65946"/>
            <Line type="monotone" dataKey={dataKey} stroke="#E65946"/>
            <Tooltip/>
            {grid && <CartesianGrid stroke="#A8DADC" strokeDasharray="5,3" />}
        </LineChart>
     </ResponsiveContainer>
     </div> 
    ); 
    }

export default Chart;