// import {useState} from "react";
import "./payment.css";

function Payment({date, caseStudy, gift, pay, desktop, icon, arrow}) {
    return (
        <div className = "container">
            <div className = "left-side">
                <p className = "date">{date}</p>
                <p className = "caseStudy">{caseStudy}</p>
                <h1 className = "gift">{gift}</h1>
                <h1 className = "pay">{pay} </h1>
                <p className = "desktop">{ desktop }</p>
            </div>
            <div className = "right-side">
                <img className = "logo" src = {icon} alt = "icon" />
                <img className = "arrow" src = {arrow} alt = "arrow" />
            </div>
        </div>
    )
}


export default Payment;