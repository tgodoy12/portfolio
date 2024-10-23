import React from "react";

const Button = (props) => {

    return (
        <>
        <button className={`${props.className}
            
            transition-all duration-300 hover:scale-110`}>
            {props.icon}
        </button>
        </>
    )
}

export default Button;