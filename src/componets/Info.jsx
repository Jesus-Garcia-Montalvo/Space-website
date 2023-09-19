import backgroundImage from "../img/desktop/image-interactive.jpg";
import "../css/main.css";

const Info = () => {
  return (
    <>
      <div className="cont-Img">
        <img
          src={backgroundImage}
          alt="Imagen interactiva"
          className="cont-Img__img"
        />
        <div className="cont-title">
          <div className="text">
            <h1>THE LEADER IN</h1>
            <h1>INTERACTIVE VR</h1>
            <p>
            Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
