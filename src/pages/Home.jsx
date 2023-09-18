import React from "react";
import Nav from "../componets/Nav";
import Info from "../componets/Info";
import Gallery from "../componets/Gallery";

const Home = () => {
  return (
    <>
      <Nav />
      {
        // aqui va la invocacion de los otros componentes
      }
      
      <Info />
      {
        // aqui va la invocacion de los otros componentes
      }
     
      <Gallery />
      {
        // aqui va la invocacion de los otros componentes
      }
    </>
  );
};

export default Home;
