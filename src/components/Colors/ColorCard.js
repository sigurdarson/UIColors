import React from "react";
import './Color.css';
import useClippy from 'use-clippy';


function ColorCard(props) {
    console.log(props)
    const [ clipboard, setClipboard ] = useClippy();
    return (

        <article
            className="colorCard"
            style={{ animationDelay: props.delay }}>
        <span 
            className="colorName">
            {props.name}
        </span>
        <div
            className="color"
            style={{background: props.background}}
            onClick={() => {setClipboard(props.colorcode);}}>
        </div>

        <span 
            className="colorCode">
            {props.colorcode}
        </span>
        <span
            className="copyCode"
            onClick={() => {setClipboard(props.colorcode);}}>
            Copy HEX
        </span>
    </article>
    );
}; 



export default ColorCard