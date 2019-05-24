import React from "react";
import './Color.css';
import GradientCard from "./GradientCard"

function GradientSection() {
    return (
        <section className="container">
            <div className="grid">

                <GradientCard 
                name= "Gradient"
                colorcode= "#4776FF"
                background= "#4776FF"
                delay= ".2s"
                />
                <GradientCard 
                name= "Dull Magenta"
                colorcode= "#DD3CBE"
                background= "#DD3CBE"
                delay= ".4s"
                />
                <GradientCard 
                name= "Electric Violet"
                colorcode= "#8C13FC"
                background= "#8C13FC"
                delay= ".6s"
                />
                <GradientCard 
                name= "Mountain Meadow"
                colorcode= "#25C181"
                background= "#25C181"
                delay= ".8s"
                />
            </div>
        </section>
    );
}

export default GradientSection