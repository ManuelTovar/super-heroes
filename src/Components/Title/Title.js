import React from "react";
import "../Title/Title.css";

/**
 * 
 * @param {*} titlePage 
 */
const Title = ({ titlePage, resource }) => {
    return (
        <div className="o-title">
            <h1>{titlePage}</h1>
            <img src={resource} alt="Marvel"></img>
        </div>
    );
}

export default Title;                                  