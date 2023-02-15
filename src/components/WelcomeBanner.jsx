import React from "react";
import "../css/WelcomeBanner.css";
import logo from "../img/logo.svg";

function WelcomeBanner(){
    return(
        <section className="section-welcome-banner container-fluid d-flex align-items-center justify-content-center">
            <div className="container contenedor d-flex flex-column justify-content-center align-items-center rounded">
                <div className="section-div1 text-center">
                    <span className="text-warning section-span-banner">Welcome to my Star Wars The Clone Wars website</span>
                    <p className="text-info section-p-banner"><br></br> This page was made for star wars fans</p>
                </div>
                <div className="section-div2 d-flex justify-content-center">
                    <img className="section-img-banner text-white" src={logo} alt="star wars the clone wars logo"></img>
                </div>    
            </div>
        </section>  
    );
}

export default WelcomeBanner;