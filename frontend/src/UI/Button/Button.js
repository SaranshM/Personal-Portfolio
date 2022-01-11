import React, { useState } from 'react';
import './Button.css';

const Button = (props) => {
    console.log(props)
    return (
        <button className = "button" style = {{ width: props.width, paddingTop: props.padding, paddingBottom: props.padding, fontSize: props.fontSize }}>{props.children}</button>
    )
}

export default Button