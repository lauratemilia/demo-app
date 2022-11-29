import React from 'react';


class UserItem extends React.Component{

    isGoldClientFunc(props){    
       return props.isGoldClient === true?" : Gold Client" : " : Regular Client";
    }

    render(){
        return (
            <div>
                <h2>{this.props.name}<span>{this.isGoldClientFunc(this.props)}</span></h2>
                <p>{this.props.email}</p>
                {/* <p>{this.props.salary}</p>
                <img src={this.props.picture} alt = "" width = "100" height="150"/> */}
            </div>
        ); 
      }
      
      
}

export default UserItem;