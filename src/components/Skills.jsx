import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Skills() {
  useEffect(() => {
    ScrollReveal().reveal(".skill__container", {
      origin: "bottom",
      distance: "50px",
      duration: 800,
      delay: 200,
      easing: "ease-out",
      reset: false,
    });
  });

  return (
    <section className="skills section" id="skills">
      <div className="section__title-flexwrapper" id="skills-wrapper">
        <h2 className="section__title">Skills</h2>
        <img
          src="src/assets/images/Stack.svg"
          alt="Decorative tech-stack"
          className="skills__decoration"
        />
      </div>
      <div className="skills__container container grid">
        <div className="skill__container">
          <h3 className="skill__title">Front-End</h3>
          <div className="icon__container" id="front-end">
            <div class="skill__icon-wrapper icon1">
              <img
                src="src/assets/images/html.svg"
                alt="HTML5"
                className="skill__icon"
              />
            </div>
            <div class="skill__icon-wrapper icon2">
              <img
                src="src/assets/images/css.svg"
                alt="CSS3"
                className="skill__icon"
              />
            </div>
            <div class="skill__icon-wrapper icon3">
              <img
                src="src/assets/images/js.svg"
                alt="JavaScript"
                className="skill__icon"
              />
            </div>
            <div class="skill__icon-wrapper icon4">
              <img
                src="src/assets/images/react.svg"
                alt="React"
                className="skill__icon"
              />
            </div>
            <div class="skill__icon-wrapper icon5">
              <img
                src="src/assets/images/vue.svg"
                alt="Vue"
                className="skill__icon"
              />
            </div>
          </div>
        </div>

        <div className="skill__container">
          <h3 className="skill__title">Back-End</h3>
          <div className="icon__container" id="back-end">
            <div class="skill__icon-wrapper icon6">
              <img
                src="src/assets/images/python.svg"
                alt="Python"
                className="skill__icon"
              />
            </div>
            <div class="skill__icon-wrapper icon7">
              <img
                src="src/assets/images/java.svg"
                alt="Java"
                className="skill__icon"
              />
            </div>
          </div>
        </div>

        <div className="skill__container">
          <h3 className="skill__title">Tools</h3>
          <div className="icon__container" id="tools">
            <div class="skill__icon-wrapper icon8">
              <img
                src="src/assets/images/figma.svg"
                alt="Python"
                className="skill__icon"
              />
            </div>
            <div class="skill__icon-wrapper icon9">
              <img
                src="src/assets/images/git.svg"
                alt="Java"
                className="skill__icon"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
