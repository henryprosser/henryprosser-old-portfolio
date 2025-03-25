import React from "react";
import assembly from "../assets/images/assembly.png";
import chefClaude from "../assets/images/chef_claude.png";
import memeGenerator from "../assets/images/meme_generator.png";
import tenzies from "../assets/images/tenzies.png";
import travelJournal from "../assets/images/travel_journal.png";

export default function Projects() {
  return (
    <section className="projects section">
      <h2 className="section__title">Projects</h2>
      <div className="projects__container container">
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
