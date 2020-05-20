import React from "react";
import "../Hero/Hero.css";

/**
 * 
 * @param {*} key
 * @param {*} resource
 * @param {*} extension
 * @param {*} name
 */

const Hero = ({ resource, extension, name }) => {

    return (
        <div className="o-hero-card">
            <h4>{name}</h4>
            <div className="o-img-container">
                <img src={`${resource}.${extension}`} alt="hero"></img>
            </div>
        </div>
    );
}

export default Hero;                                  