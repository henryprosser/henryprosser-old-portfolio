import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import decorativeCircles from "../assets/images/Circles.svg";
import chefClaude from "../assets/images/chef_claude.png";
import tenzies from "../assets/images/tenzies.png";
import assembly from "../assets/images/assembly.png";
import travelJournal from "../assets/images/travel_journal.png";
import memeGenerator from "../assets/images/meme_generator.png";

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
  }, []);

  return (
    <section className="projects section" id="projects">
      <div className="section__title-abswrapper" id="projects-wrapper">
        <h2 className="section__title" id="project-title">
          Projects
        </h2>
        <img
          src={decorativeCircles}
          alt="Decorative circles"
          className="projects__decoration"
          id="circles__decoration"
        />
      </div>
      <div className="projects__container container grid">
        <a
          href="https://chef-claude-eight.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project__container"
        >
          <img src={chefClaude} alt="Chef Claude" className="project__image" />
          <div className="project-card__footer">
            <p className="project-card__title">AI Recipe Generator</p>
            <i className="ri-arrow-right-up-line project-card__icon"></i>
          </div>
        </a>
        <a
          href="https://tenzies-game-nine-mu.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project__container"
        >
          <img src={tenzies} alt="Tenzies" className="project__image" />
          <div className="project-card__footer">
            <p className="project-card__title">Tenzies</p>
            <i className="ri-arrow-right-up-line project-card__icon"></i>
          </div>
        </a>
        <a
          href="https://assembly-endgame-hangman-nine.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project__container"
        >
          <img
            src={assembly}
            alt="Assembly: Endgame"
            className="project__image"
          />
          <div className="project-card__footer">
            <p className="project-card__title">Assembly: Endgame</p>
            <i className="ri-arrow-right-up-line project-card__icon"></i>
          </div>
        </a>
        <a
          href="https://travel-journal-nine-xi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project__container"
        >
          <img
            src={travelJournal}
            alt="Travel Journal"
            className="project__image"
          />
          <div className="project-card__footer">
            <p className="project-card__title">Travel Journal</p>
            <i className="ri-arrow-right-up-line project-card__icon"></i>
          </div>
        </a>
        <a
          href="https://meme-generator-puce-mu.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project__container"
        >
          <img
            src={memeGenerator}
            alt="Meme Generator"
            className="project__image"
          />
          <div className="project-card__footer">
            <p className="project-card__title">Meme Generator</p>
            <i className="ri-arrow-right-up-line project-card__icon"></i>
          </div>
        </a>
      </div>
    </section>
  );
}
