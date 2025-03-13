export default function Skills() {
  return (
    <section className="skills section">
      <div className="skills__container container grid">
        <h2 className="section__title">Skills</h2>
        <div className="skill__container">
          <h3 className="skill__title">Front-End</h3>
          <div className="icon__container">
            <img
              src="src/assets/images/html.svg"
              alt="HTML5"
              className="skill__icon icon1"
            />
            <img
              src="src/assets/images/css.svg"
              alt="CSS3"
              className="skill__icon icon2"
            />
            <img
              src="src/assets/images/js.svg"
              alt="JavaScript"
              className="skill__icon icon3"
            />
            <img
              src="src/assets/images/react.svg"
              alt="React"
              className="skill__icon icon4"
            />
            <img
              src="src/assets/images/vue.svg"
              alt="Vue"
              className="skill__icon icon5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
