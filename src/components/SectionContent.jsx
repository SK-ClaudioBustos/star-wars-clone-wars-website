import React from "react";
import "../css/SectionContent.css";

function SectionContent(props) {

    const { alt, source, bando, titulo, historia  } = props;

    return(
        <section className="container-fluid d-flex justify-content-center">
                <div className="section-div row container rounded">
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                        <img  className="section-img" alt={alt} src={require(`../img/characters/character-${source}.svg`)}></img>
                    </div>
                    <div className="col-12 col-md-6 d-flex align-items-center">
                        <p className="section-p"><span className={`section-titulo ${(bando === "republica") ? 'text-primary' : 'text-danger'}`}>{titulo}</span><br></br>{historia}</p>
                    </div>
                </div>
        </section>
    );
}

export default SectionContent;