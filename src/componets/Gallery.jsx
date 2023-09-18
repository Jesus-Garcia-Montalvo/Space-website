import React from "react"; // rafce
import "../css/main.css";

const Gallery = () => {
    return (
        <>
            {   
                <section class="gallery-contenedor">
                    <h1 class="gallery-contenedor-title">OUR CREATIONS</h1>
                    <button class="gallery-contenedor-button">SEE ALL</button>
                    <div class="gallery-images">
                        <div class="images-cont">
                            <div class="gradient"></div>
                            <div id="img1"></div>
                            <p class="texto-sobre-img">DEEP EARTH</p>
                        </div>
                        <div class="images-cont">
                            <div class="gradient"></div>
                            <div id="img2"></div>
                            <p class="texto-sobre-img">NIGHT ARCADE</p>
                        </div>
                        <div class="images-cont">
                            <div class="gradient"></div>
                            <div id="img3"></div>
                            <p class="texto-sobre-img">SOCCER TEAM VR</p>
                        </div>
                        <div class="images-cont">
                            <div class="gradient"></div>
                            <div id="img4"></div>
                            <p class="texto-sobre-img">THE GRID</p>
                        </div>
                        <div class="images-cont">
                            <div class="gradient"></div>
                            <div id="img5"></div>
                            <p class="texto-sobre-img">FROM UP ABOVE VR</p>
                        </div>
                        <div class="images-cont">
                            <div class="gradient"></div>
                            <div id="img6"></div>
                            <p class="texto-sobre-img">POCKET BOREALIS</p>
                        </div>
                        <div class="images-cont">
                            <div class="gradient"></div>
                            <div id="img7"></div>
                            <p class="texto-sobre-img">THE CURIOSITY</p>
                        </div>
                        <div class="images-cont">
                            <div class="gradient"></div>
                            <div id="img8"></div>
                            <p class="texto-sobre-img">MAKE IT FISHEYE</p>
                        </div>

                    </div>
                </section>
            }
        </>
    );
};

export default Gallery;
