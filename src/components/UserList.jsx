
import React from "react"
import UserItem from "./UserItem"


class  UserList extends React.Component{  

    
  componentDidMount(){
    console.log("UserList component din mount")
  }

  componentWillUnmount(){
    console.log("UserList components will unmount")
  }

  componentDidUpdate(){

    console.log("UserList component was updated")
  }
  

    render(){
        console.log("UserList component was rendered")
        const {users} = this.props
        return(
            <div>
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