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
            value={props.background}
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
            {props.from}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                <path d="M0-.25h24v24H0z" fill="none"/>
            </svg>
            {props.to}
        </span>
        <span
            className="copyCode"
            onClick={clipboard.copy}>
            Copy CSS
        </span>
    </article>
    );
}; 

export default GradientCard