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
                <GradientCard 
                name= "Gradient"
                from= "#333333"
                to= "#5A5454"
                background= "linear-gradient(45deg, #333333, #5A5454)"
                delay= "1s"
                />
                <GradientCard 
                name= "Gradient"
                from= "#4FACFE"
                to= "#00F2FE"
                background= "linear-gradient(45deg, #4FACFE, #00F2FE)"
                delay= "1.2s"
                />
                <GradientCard 
                name= "Gradient"
                from= "#DFE9F3"
                to= "#FFFFFF"
                background= "linear-gradient(45deg, #DFE9F3, #FFFFFF)"
                delay= "1.4s"
                />
                <GradientCard 
                name= "Gradient"
                from= "#B6CEE8"
                to= "#F578DC"
                background= "linear-gradient(45deg, #B6CEE8, #F578DC)"
                delay= "1.6s"
                />
                <GradientCard 
                name= "Gradient"
                from= "#A445B2 "
                to= "#FF0066"
                background= "linear-gradient(45deg, #A445B2 , #FF0066)"
                delay= "1.8s"
                />
                <GradientCard 
                name= "Gradient"
                from= "#9D50BB"
                to= "#6E48AA"
                background= "linear-gradient(45deg, #9D50BB, #6E48AA)"
                delay= "2s"
                />
                <GradientCard 
                name= "Gradient"
                from= "#F857A6"
                to= "#FF5858"
                background= "linear-gradient(45deg, #F857A6, #FF5858)"
                delay= "2.2s"
                />
                <GradientCard 
                name= "Gradient"
                from= "#24C6DC"
                to= "#514A9D"
                background= "linear-gradient(45deg, #24C6DC, #514A9D)"
                delay= "2.4s"
                />
            </div>
        </section>
    );
}

export default GradientSection