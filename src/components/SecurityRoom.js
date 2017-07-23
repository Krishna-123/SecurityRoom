import React, { Component } from 'react';
import imageLock from '../images/lock.png';
import imageUnLock from '../images/unlock.png';
import imageLight_off from '../images/light_off.png';
import imageLight_on from '../images/light_on.png';
import '../css/App.css';
import Api from '../Api/Api.js';

class SecurityRoom extends Component {
  constructor(){
    super();
    this.state = {alt_switch: true, alt_light: false };
  }

  componentDidMount(){
    setInterval(Api.GetCall.bind(this), 1000);
  }

  render() {
    var switchImage = (this.state.alt_switch) ? imageUnLock : imageLock;
    var lightImage = (this.state.alt_light) ? imageLight_on : imageLight_off ;
    return (
      <div className="App">
        <h1>Security Handler is Up and Running!!</h1>
        <div>
          <div className="App-header">
            <img src={switchImage} className="App-logo" alt="logo" />
            <div>
              <button className="lock-button" onClick={Api.PostSwitchOff.bind(this)}> LOCK </button>
              <button className="lock-button" onClick={Api.PostSwitchOn.bind(this)}> UN-LOCK </button>
            </div>
          </div>
          <div className="App-header">
            <img src={lightImage} className="App-logo" alt="logo" />
            <div>
              <button className="lock-button" onClick={Api.PostLightOff.bind(this)}> LIGHT OFF </button>
              <button className="lock-button" onClick={Api.PostLightOn.bind(this)}> LIGHT ON </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SecurityRoom;
