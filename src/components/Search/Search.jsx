import React from "react";
import "./search.css";

function Search(){
    return (
        <div className="search-con">
            <div className="search-box">
                <div className="search-icon">
                    {console.log("Rendering search component")}
                </div>
            </div>
        </div>
    )
}

export default React.memo(Search);