import React from "react";
import './Color.css';
import ColorCard from "./ColorCard"

function ColorSection() {
    return (
        <section className="container">
            <div className="grid">

                <ColorCard 
                name= "Ultramarine blue"
                colorcode= "#4776FF"
                background= "#4776FF"
                delay= ".2s"
                />
                <ColorCard 
                name= "Dull Magenta"
                colorcode= "#DD3CBE"
                background= "#DD3CBE"
                delay= ".4s"
                />
                <ColorCard 
                name= "Electric Violet"
                colorcode= "#8C13FC"
                background= "#8C13FC"
                delay= ".6s"
                />
                <ColorCard 
                name= "Mountain Meadow"
                colorcode= "#25C181"
                background= "#25C181"
                delay= ".8s"
                />
                 <ColorCard 
                name= "Fuel Yellow"
                colorcode= "#F5A623"
                background= "#F5A623"
                delay= "1s"
                />
                <ColorCard 
                name= "Mandy"
                colorcode= "#EC506E"
                background= "#EC506E"
                delay= "1.2s"
                />
                <ColorCard 
                name= "Shamrock"
                colorcode= "#54D89F"
                background= "#54D89F"
                delay= "1.4s"
                />
                <ColorCard 
                name= "Picton Blue"
                colorcode= "#55ACEE"
                background= "#55ACEE"
                delay= "1.6s"
                />
                <ColorCard 
                name= "Fiord"
                colorcode= "#445166"
                background= "#445166"
                delay= "1.8s"
                />
                <ColorCard 
                name= "Cryon Orange"
                colorcode= "#FF5D1F"
                background= "#FF5D1F"
                delay= "2s"
                />
                <ColorCard 
                name= "Watermelon"
                colorcode= "#ff4757"
                background= "#ff4757"
                delay= "2.2s"
                />
                <ColorCard 
                name= "Baltic Sea"
                colorcode= "#3d3d3d"
                background= "#3d3d3d"
                delay= "2.4s"
                />
                <ColorCard 
                name= "Purple Heart"
                colorcode= "#4D13D1"
                background= "#4D13D1"
                delay= "2.6s"
                />
                <ColorCard 
                name= "Light Sea Green"
                colorcode= "#1ABC9C"
                background= "#1abc9c"
                delay= "2.8s"
                />
                <ColorCard 
                name= "Gorse"
                colorcode= "#FFEB3B"
                background= "#FFEB3B"
                delay= "3s"
                />
                <ColorCard 
                name= "Flamingo"
                colorcode= "#FF4426"
                background= "#FF4426"
                delay= "3.2s"
                /> 
            </div>
        </section>
    );
}

export default ColorSection