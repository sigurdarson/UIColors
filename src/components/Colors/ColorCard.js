import React from "react";
import './Color.css';

function ColorCard(props) {
    console.log(props)
    return (

        <article className="colorCard" style={{ animationDelay: props.delay }}>
        <span className="colorName">
            {props.name}
        </span>
        <div className="color" style={{background: props.background}}>

        </div>
        <span className="colorCode">
        {props.colorcode}
        </span>
        <span className="copyCode">
            Copy HEX
        </span>
    </article>
    );
}

export default ColorCard