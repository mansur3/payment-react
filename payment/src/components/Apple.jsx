// import {useState} from "react";
import "./apple.css";

function Apple({date, caseStudy, gift, pay, desktop, icon, arrow}) {
    return (
        <div className = "a">
            <div className = "b">
                <p className = "c">{date}</p>
                <p className = "d">{caseStudy}</p>
                <h1 className = "e">{gift}</h1>
                <h1 className = "f">{pay} </h1>
                <p className = "g">{ desktop }</p>
            </div>
            <div className = "h">
                <img className = "i" src = {icon} alt = "icon" />
                <img className = "j" src = {arrow} alt = "arrow" />
            </div>
        </div>
    )
}


export default Apple;