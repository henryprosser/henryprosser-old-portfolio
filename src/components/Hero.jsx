import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Hero() {
  useEffect(() => {
    ScrollReveal().reveal(".hero__word", {
      origin: "bottom",
      distance: "50px",
      opacity: 0,
      duration: 600,
      interval: 130,
      delay: 400,
      easing: "ease-out",
      cleanup: true,
    });
  });

  return (
    <section className="hero section" id="home">
      <img
        src="src/assets/images/mountain-bg.jpg"
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
        </div>
      </div>
    </section>
  );
}
