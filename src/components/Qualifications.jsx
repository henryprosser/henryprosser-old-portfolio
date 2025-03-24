export default function Qualifications() {
  return (
    <section className="qualifications section">
      <h2 className="section__title">Qualifications</h2>
      <div className="qualifications__container container grid">
        {/* Education Section */}
        <div className="education__container">
          <div className="category__title-group">
            <i className="ri-pencil-ruler-2-line"></i>
            <h3 className="category__title">Education</h3>
          </div>

          <div className="education__details">
            <div className="qualifications__item">
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

        <div className="qualifications__timeline">
          <div className="timeline__line"></div>
          <div className="timeline__dot" style={{ top: "16.3%" }}></div>
          <div className="timeline__dot" style={{ top: "38.3%" }}></div>
          <div className="timeline__dot" style={{ top: "60.7%" }}></div>
          <div className="timeline__dot" style={{ top: "83.1%" }}></div>
        </div>

        {/* Experience Section */}
        <div className="experience__container">
          <div className="category__title-group">
            <i className="ri-building-line"></i>
            <h3 className="category__title">Experience</h3>
          </div>
          <div className="experience__details">
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
    </section>
  );
}
