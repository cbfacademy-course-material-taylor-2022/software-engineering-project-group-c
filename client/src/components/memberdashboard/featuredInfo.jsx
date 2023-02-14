import '../css/component/featuredInfo.css'
import {ArrowDownward, ArrowUpward} from "@material-ui/icons";

function featuredInfo() {
    return (
      <div className ="featured">
        <div className="featuredItem">
        <span className="featuredTitle">Income</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">£2510.99</span>
            <span className="featuredMoneyRate">
                +10.2 <ArrowUpward className="featuredIcon positive"/>
            </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
        </div>
        
        <div className="featuredItem">
            <span className="featuredTitle">Expenditure</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">£1598.44</span>
                <span clasName="featuredMoneyRate">
                    -5.3 <ArrowDownward className="featuredIcon negative"/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        
        <div className="featuredItem">
            <span className="featuredTitle">Savings</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">£200</span>
                <span className="featuredMoneyRate">
                    +1.3 <ArrowUpward className="featureIcon positive"/> 
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        /</div>

    );
}

export default featuredInfo;