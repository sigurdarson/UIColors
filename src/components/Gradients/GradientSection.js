import React from "react";
import './Color.css';
import GradientCard from "./GradientCard"

function GradientSection() {
    return (
        <section className="container">
            <div className="grid">

                <GradientCard 
                name= "Gradient"
                to= "#E73C7E"
                from= "#EE7752"
                background= "linear-gradient(45deg, #e73c7e, #ee7752)"
                delay= ".2s"
                />
                <GradientCard 
                name= "Gradient"
                to= "#8C13FC"
                from= "#DD3CBE"
                background= "linear-gradient(45deg, #8C13FC, #DD3CBE)"
                delay= ".4s"
                />
                <GradientCard 
                name= "Gradient"
                to= "#176AA2"
                from= "#7596FF"
                background= "linear-gradient(45deg, #176AA2, #7596FF)"
                delay= ".6s"
                />
                <GradientCard 
                name= "Gradient"
                to= "#75FFDB"
                from= "#17A246"
                background= "linear-gradient(45deg, #17A246, #75FFDB)"
                delay= ".8s"
                />
            </div>
        </section>
    );
}

export default GradientSection