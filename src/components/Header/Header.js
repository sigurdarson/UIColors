import React from "react";
import './Header.css';
import ToggleMode from '../Toggle/ToggleMode';

import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
        <div className="headerContainer">
            <h1 className="logo">UIColors.io</h1>
            <nav>
                <ul>
                    <li className="desktopItem"><Link to="/">Colors</Link></li>
                    <li className="desktopItem"><Link to="/Gradients">Gradients</Link></li>
                    <li><ToggleMode /></li>
                </ul>
            </nav>
        </div>
    </header>
    );
}

export default Header