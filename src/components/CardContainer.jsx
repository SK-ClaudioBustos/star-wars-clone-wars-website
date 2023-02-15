import React from "react";
import "../css/CardContainer.css";
import CardContent from "./CardContent";
import data_s from "../spaceship_data";

function CardContainer(){
    return(
        <section className="container-fluid">
            <div className="container-cards rounded">
                <div className="row">
                        {data_s.map((spaceship,index) =>
                            <div key={index} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                                <CardContent
                                    title={spaceship["title"]}
                                    text={spaceship["text"]}
                                    source={spaceship["source"]}
                                    alt={spaceship["alt"]}
                                />
                            </div>)   
                        }
                </div>
            </div>
        </section>
    );
}

export default CardContainer;