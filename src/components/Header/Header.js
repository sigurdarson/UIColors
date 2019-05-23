import React from "react";
import './Header.css';

function Header() {
    return (
        <header>
        <div className="headerContainer">
            <h1 className="logo">UIColors.io</h1>
            <nav>
                <ul>
                    <li>Colors</li>
                    <li>Gradients</li>
                </ul>
            </nav>
        </div>
    </header>
    );
}

export default Header