import React from "react";

function UserAddForm(){
    return(
        <form>
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