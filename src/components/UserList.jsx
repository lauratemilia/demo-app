
import React from "react"
import UserItem from "./UserItem"


class  UserList extends React.Component{  

    render(){
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