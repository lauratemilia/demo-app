import React from 'react';
import './App.css';
import UserAddForm from './components/UserAddForm';
import {LoginControl} from './components/LoginControl';
import UserList from './components/UserList';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      background:'white',
      color: "black",
      users:[
        {
          name: 'petrica',
          email: 'petrica@ex.com',
          salary: '3500$',
          picture: require("./assets/images/stelica1.jpg"),
          isGoldClient: false
        },
        {
          name: 'stelica',
          email: 'stelica@ex.com',
          salary: '3500$',
          picture: require("./assets/images/stelica2.jpg"),
          isGoldClient: true
        },
        {
          name: 'tzitzi',
          email: 'tzitzi@ex.com',
          salary: '3500$',
          picture: require("./assets/images/stelica3.jpg"),
          isGoldClient: true
        },
      ]
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
              <div><UserList users = {this.state.users}/></div>

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
