import React from "react";

function Timer(props){
    const{hour, minutes, seconds} = props;
    return(
        <div>
            <h2>{hour} : {minutes} : {seconds}</h2>
        </div>

    );
}

export default Timer;