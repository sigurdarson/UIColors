import React from "react";
import './Color.css';
import ColorCard from "./ColorCard"

function ColorSection() {
    return (
        <section className="container">
            <div className="grid">

                <ColorCard 
                name= "Sky Blue"
                colorcode= "#4776FF"
                background= "#4776FF"
                delay= ".2s"
                />
                <ColorCard 
                name= "Sky Blue"
                colorcode= "#DD3CBE"
                background= "#DD3CBE"
                delay= ".4s"
                />
                <ColorCard 
                name= "Sky Blue"
                colorcode= "#8C13FC"
                background= "#8C13FC"
                delay= ".6s"
                />
                <ColorCard 
                name= "Sky Blue"
                colorcode= "#25C181"
                background= "#25C181"
                delay= ".8s"
                />
                 <ColorCard 
                name= "Sky Blue"
                colorcode= "#F5A623"
                background= "#F5A623"
                delay= "1s"
                />
                <ColorCard 
                name= "Sky Blue"
                colorcode= "#EC506E"
                background= "#EC506E"
                delay= "1.2s"
                />
                <ColorCard 
                name= "Sky Blue"
                colorcode= "#54D89F"
                background= "#54D89F"
                delay= "1.4s"
                />
                <ColorCard 
                name= "Sky Blue"
                colorcode= "#55ACEE"
                background= "#55ACEE"
                delay= "1.6s"
                />
                <ColorCard 
                name= "Sky Blue"
                colorcode= "#445166"
                background= "#445166"
                delay= "1.8s"
                />
                <ColorCard 
                name= "Sky Blue"
                colorcode= "#FF5D1F"
                background= "#FF5D1F"
                delay= "2s"
                />

            </div>
        </section>
    );
}

export default ColorSection