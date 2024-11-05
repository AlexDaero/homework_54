import React from "react";
import './Button.css'

function Button (props){
    return(
        <>
            <button className="button" onClick={props.click}>Reset</button>
        </>
    )
}

export default Button