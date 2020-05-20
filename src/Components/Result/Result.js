import React from "react";
import "../Result/Result.css";

/**
 * 
 * @param {*} description 
 */
const Result = ({ description, results }) => {
    return (
        <div className="o-search-result">
            <p>Buscaste: <span>"{description}"</span> y se obtuvieron {results} resultados.</p>

        </div>
    );
}

export default Result;                                  