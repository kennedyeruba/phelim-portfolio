import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ barWidth }) => {
    return (
        <div className="main-bar">
            <div  style={{ width: `${barWidth}%` }} className="inner-bar"></div>
        </div>
    )
}

export default ProgressBar;