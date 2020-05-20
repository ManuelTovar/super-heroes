import React from "react";
import "../CleanItem/CleanItem.css";

/**
 * 
 * @param {*}  
 */
const CleanItem = ({ btype, onClick }) => {
    return (
        <div>
            <button className="o-bt-clean" btype={btype} onClick={onClick}>Limpiar</button>
        </div>
    );
}

export default CleanItem;                                  