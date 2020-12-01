import React from 'react'
import BatteryView from './components/BatteryView';
import './App.css';
import OtherInfo from './components/OtherInfo';



class App extends React.Component{
  constructor(props){
    super(props); 
    this.state={
      batteryLevel : 0,
      isCharging: 2,
      isFullCharged : 'rgb(241, 241, 241)',
      lastChargingTime : 0
    } 

    this.updateData = this.updateData.bind(this);
  }

  
  componentDidMount(){
    this.myInterval = setInterval(this.updateData,2000);
  }

  updateData(){
    navigator.getBattery().then((battery) =>{
      let bLevel = Math.floor(battery.level * 100);
      this.setState({batteryLevel:bLevel});
      
      //for full charging indicator
      if(bLevel > 99){
        this.setState({isFullCharged : 'blue'});
      }else{
        this.setState({isFullCharged : 'rgb(241, 241, 241)'});
      }



      //for charging symbol
      if(battery.charging){
        this.setState({isCharging : 0})
      }else{
        this.setState({isCharging : 2})
      }

      //set last charging Time
      if(battery.disChargingTime != "Infinity"){
        let lastCharginTime = battery.dischargingTime;
        this.setState({lastChargingTime : lastCharginTime})
      }
    });


  }  
  
  render(){
    return (
      <div className="App" id="app">
        <div className="batteryView">
          <BatteryView  batteryLevel={this.state.batteryLevel} isCharging={this.state.isCharging} isFullCharged={this.state.isFullCharged}/>
        </div>
        <div className="otherInfo">
          <OtherInfo lastChargingTime={this.state.lastChargingTime}/>
        </div>
      </div>
    );
  }
}

export default App;
