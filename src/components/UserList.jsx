import React from "react"
import UserItem from "./UserItem"


class  UserList extends React.Component {   
     
    showUsers(){
        return <div id="usersList" ><UserList users = {this.state.users}/></div>
        
    }

    render(){
        
        const {users} = this.props
  
        return(
            <div>
                <h2>Lista utilizatori</h2>
                <div className="users">                
                    {users.map((user, index) => 
                        {   
                            return <UserItem
                            name = {user.name}
                            email = {user.email}
                            salary = {user.salary}
                            picture = {user.picture}
                            isGoldClient = {user.isGoldClient}
                            deleteUser = {this.props.deleteUser}
                            filterUser = {this.props.filterUser}
                            key = {user.name.toString()}                
                        />               
                    })}           
                </div>
            </div>

       )
    }

}

export default UserList;