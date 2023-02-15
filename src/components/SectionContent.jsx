import React from "react";
import "../css/SectionContent.css";

function SectionContent(props) {

    const colorTexto = bando => {
        return  (bando === "republica");
    };

    return(
        <section className="container-fluid d-flex justify-content-center">
                <div className="section-div row container rounded">
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                        <img  className="section-img" alt={props.alt} src={require(`../img/characters/character-${props.source}.svg`)}></img>
                    </div>
                    <div className="col-12 col-md-6 d-flex align-items-center">
                        <p className="section-p"><span className={`section-titulo ${colorTexto(props.bando) ? 'text-primary' : 'text-danger'}`}>{props.titulo}</span><br></br>{props.historia}</p>
                    </div>
                </div>
        </section>
    );
}

export default SectionContent;