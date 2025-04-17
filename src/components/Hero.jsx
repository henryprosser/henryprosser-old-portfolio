import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import heroBackground from "../assets/images/mountain-bg.jpg";

export default function Hero() {
  useEffect(() => {
    ScrollReveal().reveal(".hero__word", {
      origin: "bottom",
      distance: "50px",
      opacity: 0,
      duration: 600,
      interval: 130,
      delay: 300,
      easing: "ease-out",
      cleanup: true,
    });

    ScrollReveal().reveal(".arrow__wrapper", {
      origin: "bottom",
      distance: "50px",
      opacity: 0,
      duration: 800,
      delay: 900,
      easing: "ease-out",
    });
  }, []);

  return (
    <section className="hero section" id="home">
      <img
        src={heroBackground}
        className="hero__bg"
        alt="Mountain Background"
      />
      <div className="hero__shadow"></div>
      <div className="hero__container container">
        <div className="hero__data">
          <h1 className="hero__title">
            <span className="hero__word">Welcome</span>{" "}
            <span className="hero__word">to</span>{" "}
            <span className="hero__word">My</span>{" "}
            <span className="hero__word">World.</span>
          </h1>
          <div className="arrow__wrapper">
            <a href="#about" className="arrow__link">
              <div className="hero__arrow"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
