import React from "react";
import CurrencyInput from 'react-currency-input-field';

function validate(name, email, salary) {
    return {      
      name: {value: validateInputNotEmpty(name), message:"Name cannot be empty"},
      email: {value: validateEmail(email), message:"Invalid email"},
      salary: {value: validateInputNotEmpty(salary), message:"Salary cannot be empty"}
    };
  }

  function validateEmail(email){
    return (email.length !== 0) && (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email));
  }

  function validateInputNotEmpty(input) {
    return input.trim().length === 0;
  }

class UserAddForm extends React.Component{

      constructor(props){
        super(props)
        this.state = {
            name:'',
            email: '',
            salary: '',
            isGoldClient: false,
            errors: {
              name: "",
              email:"",
              salary:""
            }
            
        }
      }

      handleSubmit(e) {
        e.preventDefault();
        if (this.canBeSubmitted()) {
            e.preventDefault();
            return;
        }

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

 
    
      canBeSubmitted() {
        const errorsObj = validate(this.state.name, this.state.email, this.state.salary);
        this.setState({errors:errorsObj});
        const isDisabled = Object.keys(errorsObj).some(x => errorsObj[x]);
        return isDisabled;
      }

    render(){
        const errors = this.state.errors;
        const isDisabled = Object.keys(errors).some(x => errors[x]);

        return(
            <form onSubmit={(e) => {this.handleSubmit(e)}}>
                    <h3>Adauga un utilizator nou:</h3><br />
                    <label htmlFor="name">Nume:
                        <input type="text"  
                        className= {errors.name ? 'error-control' : 'form-control'}
                        placeholder={errors.name ? errors.name.message : "Enter your name"} 
                        id="name" 
                        name="name" 
                        value={this.state.name} 
                        onChange={(e) => {this.handleInputChange(e)}}/>
                    </label> <br/><br/>

                    <label htmlFor="email">Email:
                        <input type="text" id="email" name="email" value={this.state.email} onChange={(e) => {this.handleInputChange(e)}}
                         className={errors.email ? 'error-control' : 'form-control'}
                         placeholder={errors.email ? errors.email.message : "Enter your email"} />
                    </label> <br/><br/>

                    <label htmlFor="salary">Salariu:
                        <CurrencyInput id="salary" name="salary" decimalsLimit={2} suffix="€" value={this.state.salary} onChange={(e) => {this.handleInputChange(e)}}
                         className={errors.salary ? 'error-control' : 'form-control'}
                         placeholder={errors.salary ? errors.salary.message : "Enter your salary"} />
                    </label> <br/><br/>

                    <label htmlFor="isGoldClient">E client Gold:
                        <input type="checkbox" id="isGoldClient" name="isGoldClient" checked={this.state.isGoldclient} onChange={(e) => {this.handleInputChange(e)}}/>
                    </label> <br/><br/>
    
                    <input disabled={isDisabled} type="submit" value="Submit" className = "customButton"/>

                
             </form>
        
            );
    }
}

export default UserAddForm;