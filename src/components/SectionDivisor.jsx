import React from "react";
import "../css/SectionDivisor.css";

function SectionDivisor(props){
    return(
        <div className="divisor d-flex align-items-center justify-content-center">
            <h1 id={props.id} className={`divisor-h1 text-center ${props.color}`}>{props.text}</h1>
        </div>
    );
}

export default SectionDivisor;