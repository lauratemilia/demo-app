import React from 'react';
import './App.css';
import UserItem from './components/UserItem';
import Timer from './components/Timer'
import stelica1 from "./assets/images/stelica1.jpg";
import stelica2 from "./assets/images/stelica2.jpg";
import stelica3 from "./assets/images/stelica3.jpg";


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      background:'white'
    };
  }

  changeColor(event) {
    console.log(event.target.value);
    this.setState({background: event.target.value})
  }
  

  render(){
    return (
      <div className="App" style={{background:this.state.background}}>
              CURS02
              <div><UserItem name="petrica" email="petrica@ex.com" salary="3500$"/><img src = {stelica1} alt="" width="100" height="100" /></div>
              <div><UserItem name="stelica" email="stelica@ex.com" salary="3500$"/><img src = {stelica2} alt="" width="100" height="150" /></div>
              <div><UserItem name="tzitzi" email="tzitzi@ex.com" salary="3500$"/><img src = {stelica3} alt="" width="100" height="100" /></div>
              <div><Timer hour="00" minutes="02" seconds = "00" /></div>
              <input type = "color" onChange={(event) => this.changeColor(event)}/>

      </div>
    ); 
  }

}

export default App;
