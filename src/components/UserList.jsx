
import React from "react"
import UserItem from "./UserItem"


class  UserList extends React.Component {  

 
    
  componentDidMount(){

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
            <div className="users">
                {users.map((user, index) => 
                    {   
                        return <UserItem
                        name = {user.name}
                        email = {user.email}
                        salary = {user.salary}
                        picture = {user.picture}
                        isGoldClient = {user.isGoldClient}
                        key = {user.name.toString()}                
                    />               
                })}           
            </div>

       )
    }

}

export default UserList;