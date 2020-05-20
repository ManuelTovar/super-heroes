import React from "react";
import "../SearchItems/SearchItems.css";

/**
 * 
 * @param {*}  
 */
const SearchItems = ({ placeholder, itype, btype, onClick, id }) => {
    return (
        <div className="o-search-items">
            <input type={itype} id={id} placeholder={placeholder}></input>
            <button type={btype} onClick={onClick}>Buscar</button>
        </div>
    );
}

export default SearchItems;                                  