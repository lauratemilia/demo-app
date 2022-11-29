import React from 'react';


class UserItem extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            clientType: ""
        }
    }

    componentDidMount(){
        this.props.isGoldClient === true ? this.setState({clientType : "gold"}) :  this.setState({clientType : "regular"})       
    }

    isGoldClientFunc(props){
       return props.isGoldClient === true? "Gold" : "Regular"
    }

    render(){
        return (
            <div id="user" className={this.state.clientType}>
                <div>
                   <div id="userData">
                    <h2>{this.props.name}</h2>
                    <h4 >{this.isGoldClientFunc(this.props)}</h4>
                    <p>{this.props.email}<span> ( {this.props.salary} )</span></p>
                   </div>
                   <div id="userImg"><img src={this.props.picture} alt = "" width = "100" height="150"/></div>
                </div>
            </div>
        ); 
      }           
}

export default UserItem;