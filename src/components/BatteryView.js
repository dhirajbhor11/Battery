import React from 'react';
import BatteryLogo from './../img/battery-logo.png';
import './../css/BatteryView.css';
import chargeLogo from './../img/charge.png'
class BatteryView extends React.Component{
    constructor(props){
        super(props);
        let pisCharging = this.props.isCharging;
        let pbatteryLevel = this.props.batteryLevel;
        this.state = {
            batteryLevel: pbatteryLevel,
            isCharging : pisCharging,
            isFullCharged : 'rgb(241, 241, 241);'
        };

        
    }


    render(){
        return(
            <div className="inBatteryView">
                <div className="logoView" id="logoView" >
                    <div id="batterySymbol" className="batterySymbol">
                        <div id="downCell" className="downCell">
                            <div id="upperCell" className="upperCell" style={{backgroundColor: this.props.isFullCharged}}></div> 
                            <progress min="0" max="99" value={this.props.batteryLevel} className="batteryProgress" id="batteryProgress" style={{zIndex : this.props.isCharging}}/>
                            <img src={chargeLogo} id="chargeImage" className="chargeLogo" />

                        </div>
                    </div>
                </div>
                <div className="info">
                    <div className="chargePercent">
                        <h1><span id="chargedAmount" className="chargedAmount">{this.props.batteryLevel}</span><span className="cAmount">%</span></h1>
                    </div>
                </div>
            </div>
        );
    }


}

export default BatteryView;

