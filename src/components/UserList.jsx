
import React from "react"
import UserItem from "./UserItem"


class  UserList extends React.Component {  

  // constructor(){
  //   super();
  //   this.state = {
  //     users:[
  //       {
  //         name: 'petrica',
  //         email: 'petrica@ex.com',
  //         salary: '3500$',
  //         picture: require("./../assets/images/stelica1.jpg"),
  //         isGoldClient: false
  //       },
  //       {
  //         name: 'stelica',
  //         email: 'stelica@ex.com',
  //         salary: '3500$',
  //         picture: require("./../assets/images/stelica2.jpg"),
  //         isGoldClient: true
  //       },
  //       {
  //         name: 'tzitzi',
  //         email: 'tzitzi@ex.com',
  //         salary: '3500$',
  //         picture: require("./../assets/images/stelica3.jpg"),
  //         isGoldClient: true
  //       }
  //     ],
  //   }
  // }
    
  componentDidMount(){
    console.log("Fetching users")
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(data => {      
    //   this.setState({users: data});      
    // })
  }

  componentWillUnmount(){
  }

  componentDidUpdate(){

  }
  
  
  showUsers(){
    console.log("users\n")
    return <div id="usersList" ><UserList users = {this.state.users}/></div>
    
  }


    render(){
        const {users} = this.props
        return(
            <div>
                {users.map((user, index) => 
                    {   
                        return <UserItem
                        name = {user.name}
                        email = {user.email}
                        // salary = {user.salary}
                        // picture = {user.picture}
                        // isGoldClient = {user.isGoldClient}
                        key = {user.name.toString()}                
                    />               
                })}           
            </div>

       )
    }

}

export default UserList;