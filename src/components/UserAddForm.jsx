import { render } from "@testing-library/react";
import React from "react";

class UserAddForm extends React.Component{

      constructor(props){
        super(props)
        this.state = {
            name:'',
            email: '',
            salary: '',
            isGoldClient: false
        }
      }

      handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
        const newUser = {
            name : this.state.name,
            email: this.state.email,
            salary: this.state.salary,
            isGoldClient: this.state.isGoldClient
        }
        this.props.updateUsersList(newUser)
      }

      handleInputChange(e){
        e.preventDefault();
        if(e.target.id === "isGoldClient"){
            this.setState({[e.target.id]: e.target.checked})
        }
        else{
            this.setState({[e.target.id]: e.target.value})
        }        
      }

    render(){
        return(
            <form onSubmit={(e) => {this.handleSubmit(e)}}>
                    <h3>Adauga un utilizator nou:</h3><br />
                    <label htmlFor="name">Nume:
                        <input type="text" id="name" name="name" value={this.state.name} onChange={(e) => {this.handleInputChange(e)}}/>
                    </label> <br/><br/>

                    <label htmlFor="email">Email:
                        <input type="text" id="email" name="email" value={this.state.email} onChange={(e) => {this.handleInputChange(e)}}/>
                    </label> <br/><br/>

                    <label htmlFor="salary">Salariu:
                        <input type="text" id="salary" name="salary" value={this.state.salary} onChange={(e) => {this.handleInputChange(e)}}/>
                    </label> <br/><br/>

                    <label htmlFor="isGoldClient">E client Gold:
                        <input type="checkbox" id="isGoldClient" name="isGoldClient" checked={this.state.isGoldclient} onChange={(e) => {this.handleInputChange(e)}}/>
                    </label> <br/><br/>
    
                    <input type="submit" value="Submit"/>
                </form>
    
        );
    }
}

export default UserAddForm;