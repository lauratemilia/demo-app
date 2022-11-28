import React from 'react';
import './App.css';
import UserItem from './components/UserItem';
import stelica1 from "./assets/images/stelica1.jpg";
import stelica2 from "./assets/images/stelica2.jpg";
import stelica3 from "./assets/images/stelica3.jpg";
import UserAddForm from './components/UserAddForm';
import {LoginControl} from './components/LoginControl';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      background:'white',
      color: "black"
    };
  }

  backgroundCangeColor(event) {
    console.log(event.target.value);
    this.setState({background: event.target.value})
  }

  textChangeColor(event) {
    console.log(event.target.value);
    this.setState({color: event.target.value})
  }
  

  render(){
    return (
      <div className="App" style={{background:this.state.background, color:this.state.color}}>
              CURS02
              <div><LoginControl name = "GoldMemeber"/></div>
              <div><UserItem name="petrica" email="petrica@ex.com" salary="3500$" picture = {stelica1}/></div>
              <div><UserItem name="stelica" email="stelica@ex.com" salary="3500$" picture = {stelica2}/></div>
              <div><UserItem name="tzitzi" email="tzitzi@ex.com" salary="3500$" picture = {stelica3}/></div>

              <div><UserAddForm/></div>
              <label> change background color: 
              <input type = "color" onChange={(event) => this.backgroundCangeColor(event)}/></label>
              <br/><br/>
              <label>change text color: 
              <input type = "color" onChange={(event) => this.textChangeColor(event)}/></label>


      </div>
    ); 
  }

}

export default App;
