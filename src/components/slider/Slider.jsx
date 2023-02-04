import './Slider.css'
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowLeft, faArrowRight);

dom.watch();

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrevSlide = () => {
    setSlideIndex(slideIndex === 0 ? 1 : 0);
  };

  const handleNextSlide = () => {
    setSlideIndex(slideIndex === 0 ? 1 : 0);
  };

  return (
    <div className="slider">
      <Link to="/tienda">
        <button className="boton-tienda">Ir a tienda!</button>
      </Link>
      <div onClick={handlePrevSlide} className="prev-flecha">
        <i className="fas fa-arrow-left"></i>
      </div>
      <div className="slides">
      {slideIndex === 0 ? (
          <img className="slide-img" src="https://img.freepik.com/fotos-premium/camisetas-perchas_23-2147669589.jpg?w=2000" alt="Slide 1" />
        ) : (
          <img className="slide-img" src="https://img.freepik.com/fotos-premium/cerca-camisetas-perchas_51195-3851.jpg?w=2000" alt="Slide 2" />
        )}
      </div>
      <div onClick={handleNextSlide} className="sig-flecha">
        <i className="fas fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Slider;


