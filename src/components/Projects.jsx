import React from "react";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Projects() {
  useEffect(() => {
    ScrollReveal().reveal(".project__container", {
      origin: "bottom",
      distance: "50px",
      duration: 800,
      delay: 300,
      easing: "ease-out",
      reset: false,
      afterReveal: (el) => {
        el.style.transition = ""; // Removes ScrollReveal’s inline transition
      },
    });
  });

  return (
    <section className="projects section" id="projects">
      <div className="section__title-abswrapper" id="projects-wrapper">
        <h2 className="section__title" id="project-title">
          Projects
        </h2>
        <img
          src="src/assets/images/Circles.svg"
          alt="Decorative circles"
          className="projects__decoration"
          id="circles__decoration"
        />
      </div>
      <div className="projects__container container grid">
        <div className="project__container">
          <img
            src="src/assets/images/chef_claude.png"
            alt="Chef Claude"
            className="project__image"
          />
          <div className="project-card__footer">
            <p className="project-card__title">AI Recipe Generator</p>
            <i class="ri-arrow-right-up-line project-card__icon"></i>
          </div>
        </div>
        <div className="project__container">
          <img
            src="src/assets/images/tenzies.png"
            alt="Tenzies"
            className="project__image"
          />
          <div className="project-card__footer">
            <p className="project-card__title">Tenzies</p>
            <i class="ri-arrow-right-up-line project-card__icon"></i>
          </div>
        </div>
        <div className="project__container">
          <img
            src="src/assets/images/assembly.png"
            alt="Assembly: Endgame"
            className="project__image"
          />
          <div className="project-card__footer">
            <p className="project-card__title">Assembly: Endgame</p>
            <i class="ri-arrow-right-up-line project-card__icon"></i>
          </div>
        </div>
        <div className="project__container">
          <img
            src="src/assets/images/travel_journal.png"
            alt="Travel Journal"
            className="project__image"
          />
          <div className="project-card__footer">
            <p className="project-card__title">Travel Journal</p>
            <i class="ri-arrow-right-up-line project-card__icon"></i>
          </div>
        </div>
        <div className="project__container">
          <img
            src="src/assets/images/meme_generator.png"
            alt="Meme Generator"
            className="project__image"
          />
          <div className="project-card__footer">
            <p className="project-card__title">Meme Generator</p>
            <i class="ri-arrow-right-up-line project-card__icon"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
