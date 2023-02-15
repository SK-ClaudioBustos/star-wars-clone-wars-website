import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import data_w from "../weapons_data";
import "../css/GalleryContent.css";

function GalleryContent(){
    return(
        <section className="container-fluid">
            <Carousel className="container carousel-container d-flex justify-content-center align-items-center rounded">
                {data_w.map((weapon,index) =>
                    <Carousel.Item key={index} className="carousel-item">
                        <img
                        className="d-block w-100 carousel-img"
                        src={require(`../img/weapons/weapon_${weapon["source"]}.svg`)}
                        alt={weapon["alt"]}
                        />
                        <Carousel.Caption>
                        <h3 className="carousel-h3 text-warning">{weapon["title"]}</h3>
                        <p className="carousel-p text-info">{weapon["text"]}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )} 
            </Carousel>
        </section>
    );
}

export default GalleryContent;

