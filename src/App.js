import React from 'react';
import './App.css';
import UserAddForm from './components/UserAddForm';
import {LoginControl} from './components/LoginControl';
import UserList from './components/UserList';
import PostList from './components/PostList';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      background:'white',
      color: "black",
      users:[],
      posts:[]
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

  showUsers(){
    document.getElementById("postsList").style.display = "none"
    document.getElementById("usersList").style.display = "block"
  }

  showPosts(){
    document.getElementById("usersList").style.display = "none"
    document.getElementById("postsList").style.display = "block"
  }

  componentDidMount(){    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {return response.json()})
    .then(data => {  
      this.setState({users: data});      
    })

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {return response.json()})
    .then(data => {
      this.setState({posts: data});      
    })
  }

  componentWillUnmount(){
  }

  componentDidUpdate(){

  }
  

  render(){
    
    return (
      <div className="App" style={{background:this.state.background, color:this.state.color}}>
              CURS02
              <div><LoginControl name = "GoldMemeber"/></div>

              <button id="showUsersButton" onClick={this.showUsers}>Show Users</button>
              <br/><br/>
              <button id="showwPostsButton" onClick={this.showPosts}>Show Posts</button>
              <br/><br/>

              <div id="usersList" style={{dispplay:"block"}}><UserList users = {this.state.users}/></div>
              <div id="postsList" style={{dispplay:"none"}}><PostList posts = {this.state.posts}/></div>

              {/* <div><UserAddForm/></div> */}
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
