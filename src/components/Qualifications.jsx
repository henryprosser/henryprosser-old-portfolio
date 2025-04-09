import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Qualifications() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "40px",
      duration: 900,
      delay: 200,
      easing: "ease-out",
      reset: false,
    });
    sr.reveal(`.qualifications__timeline`);
    sr.reveal(`.education__container`, { origin: "left" });
    sr.reveal(`.experience__container`, { origin: "right" });
  });

  return (
    <section className="qualifications section" id="qualifications">
      <div className="section__title-abswrapper">
        <h2 className="section__title">Qualifications</h2>
        <img
          src="src/assets/images/Stripes.svg"
          alt="Decorative stripes"
          className="qualifications__decoration"
        />
      </div>
      <div className="qualifications__container container grid">
        {/* Education Section */}
        <div className="education__container">
          <div className="category__title-group" id="education-title">
            <i className="ri-pencil-ruler-2-line"></i>
            <h3 className="category__title">Education</h3>
          </div>

          <div className="education__details">
            <div className="timeline-mobile">
              <div className="timeline__dot" style={{ top: "26%" }}></div>
              <div className="timeline__dot" style={{ top: "71%" }}></div>
            </div>
            <div className="education__data">
              <div className="qualifications__item" id="msc-cs">
                <h4>MSc Computer Science - Distinction</h4>
                <p>University of Bath</p>
                <p>2021 - 2022</p>
              </div>
              <div className="qualifications__item" id="eng-maths">
                <h4>BEng Engineering Mathematics - 2:1</h4>
                <p>University of Bristol</p>
                <p>2017 - 2020</p>
              </div>
            </div>
          </div>
        </div>

        <div className="qualifications__timeline">
          <div className="timeline__line">
            <div className="timeline__dot" style={{ top: "15.3%" }}></div>
            <div className="timeline__dot" style={{ top: "39.3%" }}></div>
            <div className="timeline__dot" style={{ top: "62.7%" }}></div>
            <div className="timeline__dot" style={{ top: "85.8%" }}></div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="experience__container">
          <div className="category__title-group" id="experience-title">
            <i className="ri-building-line"></i>
            <h3 className="category__title">Experience</h3>
          </div>
          <div className="experience__details">
            <div className="timeline-mobile">
              <div className="timeline__dot" style={{ top: "26%" }}></div>
              <div className="timeline__dot" style={{ top: "71%" }}></div>
            </div>
            <div className="experience__data">
              <div className="qualifications__item" id="full-stack">
                <h4>Full-Stack Software Developer (Intern)</h4>
                <p>Brokit</p>
                <p>Jul 24 - Dec 24</p>
              </div>
              <div className="qualifications__item" id="web-designer">
                <h4>Web Designer (Work Experience)</h4>
                <p>Knibbs</p>
                <p>Apr 17 - May 17</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
