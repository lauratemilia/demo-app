import React from "react";

function validate(name, email, salary) {
    return {      
      name: {valid: validateName(name), errMessage:"Name cannot be empty"},
      email: {valid: validateEmail(email), errMessage:"Invalid email"},
      salary: {valid: validateSalary(salary), errMessage:"Salary cannot be empty"}
    };
  }

  function validateEmail(email){
    const isValid = (email.trim().length !== 0) && (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
    return isValid;
  }

  function validateName( name) {
    const isValid = name.trim().length !== 0
    return isValid;
  }

  function validateSalary( salary) {
    const isValid = salary.trim().length !== 0 && (/[0-9]/.test(salary))
    return isValid;
  }

  const initialState = {
      name:'',
      email: '',
      salary: '',
      isGoldClient: false,
      errorName: {},
      errorEmail:{},
      errorSalary: {},
  }

class UserAddForm extends React.Component{

      constructor(props){
        super(props)
        this.state = {
            name:'',
            email: '',
            salary: '',
            isGoldClient: false,
            errorName: {},
            errorEmail:{},
            errorSalary: {},
        }
      }

    
      componentDidMount() {
        this.initialState = this.state
    }

      handleSubmit(e) {
        e.preventDefault();
        if (!this.canBeSubmitted()) {
            e.preventDefault();
            console.log("cannot be submitted")
            return;
        }
        console.log("this can be submitted")
        const newUser = {
            name : this.state.name,
            email: this.state.email,
            salary: this.state.salary + '€',
            isGoldClient: this.state.isGoldClient
        }
        console.log(newUser)
        this.props.updateUsersList(newUser)
        this.setState(this.initialState)
      }

      resetState(e){
        e.preventDefault();
        console.log("reset: " + e.target.id)
        

        switch(e.target.id) {
          case 'name':
            this.setState({name : initialState.name});
            this.setState({errorName : initialState.errorName});
            break;
          case 'email':
            this.setState({email : initialState.email});
            this.setState({errorEmail : initialState.errorEmail});
            break;
          case 'salary':
            this.setState({salary : initialState.salary});
            this.setState({errorSalary : initialState.errorSalary});
            break;
          default:
            return;
        }
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
        console.log("errors: \n" + JSON.stringify(errorsObj))
        console.log("error obj keys: " + JSON.stringify(Object.keys(errorsObj)))
        console.log(!Object.keys(errorsObj).some(x =>  console.log(errorsObj[x].valid)))

        this.setState({errorName:errorsObj.name});
        this.setState({errorEmail:errorsObj.email});
        this.setState({errorSalary:errorsObj.salary});

        return !Object.keys(errorsObj).some(x => {return errorsObj[x].valid === false;});
      }

    render(){
  
        return(
            <form onSubmit={(e) => {this.handleSubmit(e)}}>
                    <h3>Adauga un utilizator nou:</h3><br />
                    <label htmlFor="name">Nume:
                        <input type="text"                          
                        id="name" 
                        name="name" 
                        value={this.state.name} 
                        onFocus={(e)=>{this.resetState(e)}}
                        onChange={(e) => {this.handleInputChange(e)}}
                        className= 'form-control'
                        placeholder="Enter your name"/> 
                        {this.state.errorName.valid ? null : <span> {this.state.errorName.errMessage}</span> }                    
                    </label> <br/><br/>

                    <label htmlFor="email">Email:
                        <input type="text" 
                         id="email" 
                         name="email" 
                         value={this.state.email} 
                         onFocus={(e)=>{this.resetState(e)}} 
                         onChange={(e) => {this.handleInputChange(e)}}
                         className= 'form-control'
                         placeholder="Enter your email" />
                        {this.state.errorEmail.valid ? null : <span> {this.state.errorEmail.errMessage}</span> }                    
                    </label> <br/><br/>

                    <label htmlFor="salary">Salariu:
                        <input type = "text" 
                         id="salary" 
                         name="salary" 
                         value={this.state.salary} 
                         onFocus={(e)=>{this.resetState(e)}} 
                         onChange={(e) => {this.handleInputChange(e)}}
                         className= 'form-control'
                         placeholder="Enter your salary" />
                        {this.state.errorSalary.valid ? null : <span> {this.state.errorSalary.errMessage}</span> }                    
                    </label> <br/><br/>

                    <label htmlFor="isGoldClient">E client Gold:
                        <input type="checkbox" id="isGoldClient" name="isGoldClient" checked={this.state.isGoldclient} onChange={(e) => {this.handleInputChange(e)}}/>
                    </label> <br/><br/>
    
                    <input className="customButton" type="submit" value="Submit"/>

                
             </form>
        
            );
    }
}

export default UserAddForm;