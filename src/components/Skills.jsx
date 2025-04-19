import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import decorativeTechStack from "../assets/images/Stack.svg";
import htmlIcon from "../assets/images/html.svg";
import cssIcon from "../assets/images/css.svg";
import jsIcon from "../assets/images/js.svg";
import pythonIcon from "../assets/images/python.svg";
import javaIcon from "../assets/images/java.svg";
import sqlIcon from "../assets/images/sql.svg";
import reactIcon from "../assets/images/react.svg";
import vueIcon from "../assets/images/vue.svg";
import figmaIcon from "../assets/images/figma.svg";
import gitIcon from "../assets/images/git.svg";

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
  }, []);

  return (
    <section className="skills section" id="skills">
      <div className="section__title-flexwrapper" id="skills-wrapper">
        <h2 className="section__title">Skills</h2>
        <img
          src={decorativeTechStack}
          alt="Decorative tech-stack"
          className="skills__decoration"
        />
      </div>
      <div className="skills__container container grid">
        <div className="skill__container">
          <h3 className="skill__title">Languages</h3>
          <div className="icon__container" id="languages">
            <div className="skill__icon-wrapper icon1">
              <img src={htmlIcon} alt="HTML5" className="skill__icon" />
            </div>
            <div className="skill__icon-wrapper icon2">
              <img src={cssIcon} alt="CSS3" className="skill__icon" />
            </div>
            <div className="skill__icon-wrapper icon3">
              <img src={jsIcon} alt="JavaScript" className="skill__icon" />
            </div>
            <div className="skill__icon-wrapper icon4">
              <img src={pythonIcon} alt="Python" className="skill__icon" />
            </div>
            <div className="skill__icon-wrapper icon5">
              <img src={javaIcon} alt="Java" className="skill__icon" />
            </div>
            <div className="skill__icon-wrapper icon6">
              <img src={sqlIcon} alt="SQL" className="skill__icon" />
            </div>
          </div>
        </div>

        <div className="skill__container">
          <h3 className="skill__title">Frameworks</h3>
          <div className="icon__container" id="frameworks">
            <div className="skill__icon-wrapper icon7">
              <img src={reactIcon} alt="React" className="skill__icon" />
            </div>
            <div className="skill__icon-wrapper icon8">
              <img src={vueIcon} alt="Vue" className="skill__icon" />
            </div>
          </div>
        </div>

        <div className="skill__container">
          <h3 className="skill__title">Tools</h3>
          <div className="icon__container" id="tools">
            <div className="skill__icon-wrapper icon9">
              <img src={figmaIcon} alt="Figma" className="skill__icon" />
            </div>
            <div className="skill__icon-wrapper icon10">
              <img src={gitIcon} alt="Git" className="skill__icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
