import React from "react";
import './Color.css';
import { useClipboard } from 'use-clipboard-copy';

function GradientCard(props) {
    const clipboard = useClipboard({
        onSuccess() {
            const copied = document.querySelector(".success");
            copied.classList.add("show");
            copied.addEventListener("animationend", () => {
                copied.classList.add("removeSuccess");
                copied.addEventListener("animationend", () => {
                    copied.classList.remove("show");
                    copied.classList.remove("removeSuccess");
                });
            });
        },
        onError() {
          console.log('Failed to copy text!')
        }
      });
    return (
        <article
            className="colorCard"
            style={{ animationDelay: props.delay }}>
        <input 
            ref={clipboard.target}
            value={props.colorcode}
            style={{display: "none"}}
            readOnly />
        <span 
            className="colorName">
            {props.name}
        </span>
        <div
            className="color"
            style={{background: props.background}}
            onClick={clipboard.copy}>
        </div>

        <span 
            className="colorCode">
            {props.colorcode}
        </span>
        <span
            className="copyCode"
            onClick={clipboard.copy}>
            Copy HEX
        </span>
    </article>
    );
}; 

export default GradientCard