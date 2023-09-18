import backgroundImage from "../img/desktop/image-interactive.jpg";
import "../Info.css";

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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              nisi unde fugit corrupti inventore distinctio eius! Fuga, omnis
              qui voluptatem, magnam voluptatibus ullam accusamus, vel voluptas
              repellendus molestias saepe dolorem!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
