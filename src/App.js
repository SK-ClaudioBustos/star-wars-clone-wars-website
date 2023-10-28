import React from "react";
import c_data from "./character_data.jsx";
// CSS
import "./css/App.css";
// Components
import NavigationBar from "./components/NavigationBar";
import WelcomeBanner from "./components/WelcomeBanner";
import SectionDivisor from "./components/SectionDivisor";
import SectionContent from "./components/SectionContent";
import CardContainer from "./components/CardContainer";
import GalleryContent from "./components/GalleryContent";
import Foot from "./components/Foot";
import UpButton from "./components/UpButton";

/*agrege el atributo index ya que los elementos del arreglo no poseen un id, esto es recomendado por React*/
function App() {
  return (
    <div className="App">
        <NavigationBar/>
        <UpButton/>
        <WelcomeBanner/>
        <SectionDivisor 
          id="seccion1"
          text="Characters"
          color="text-primary-emphasis"
        /> 
        {c_data.map((character,index) => 
            <SectionContent
              key={index}
              titulo={character["titulo"]}
              historia={character["historia"]}
              alt={character["alt"]}
              source={character["source"]}
              bando={character["bando"]}
            />)
        }
        <SectionDivisor 
          id="seccion2"
          text="Spaceships"
          color="text-success"
        />
        <CardContainer/>
        <SectionDivisor 
          id="seccion3"
          text="Weapons"
          color="text-danger"
        />
        <GalleryContent/>
        <Foot/>
    </div>
  );
}

export default App;