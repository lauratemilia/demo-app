import React from "react";

function UserAddForm(){

     function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
      }

    return(
        <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:
                    <input type="text" id="name" name="name"/>
                </label> <br/><br/>
                <label htmlFor="email">Email:
                    <input type="text" id="email" name="email"/>
                </label> <br/><br/>
                <input type="submit" value="Submit"/>
            </form>

    );
}

export default UserAddForm;