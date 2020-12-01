import React from 'react';
import './../css/OtherInfo.css';


class OtherInfo extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.lastChargingTime);
    }

    componentDidUpdate(){
        this.returnTime();
    }
    
    returnTime(){
         let myDate = new Date(this.props.lastChargingTime);
         let mylastChargingTime = myDate.getDay() + "/" + myDate.getMonth() + "/" + myDate.getFullYear() + "||" + myDate.getHours() +":" + myDate.getMinutes() + ":" +myDate.getSeconds() ;
        console.log(mylastChargingTime);
        return mylastChargingTime;
    }

    render(){
        return(
            <div className="otherInfo">
                <div className="lastChargingTime">
                    <h1>
                        Last Charging Time  : {this.returnTime()}
                    </h1>
                </div>
                 <div className="LastDischargingTime">
                </div> 
            </div>
        );
    }
}

export default OtherInfo;