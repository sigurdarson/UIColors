import React from 'react';

import { Link } from "react-router-dom";

function MobileMenu() {
    return (
        <div className="mobileMenu">
            <nav>
                <ul>
                    <li><Link to="/">Colors</Link></li>
                    <li><Link to="/Gradients">Gradients</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default MobileMenu