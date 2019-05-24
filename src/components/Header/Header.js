import React from "react";
import './Header.css';

import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
        <div className="headerContainer">
            <h1 className="logo">UIColors.io</h1>
            <nav>
                <ul>
                    <li><Link to="/">Colors</Link></li>
                    <li><Link to="/Gradients">Gradients</Link></li>
                </ul>
            </nav>
        </div>
    </header>
    );
}

export default Header