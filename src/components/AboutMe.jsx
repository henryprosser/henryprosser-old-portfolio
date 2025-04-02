export default function AboutMe() {
  return (
    <section className="about section" id="about">
      <div className="section__title-abswrapper">
        <h2 className="section__title">About Me</h2>
        <img
          src="src/assets/images/Squares.svg"
          alt="Decorative squares"
          className="about__decoration"
        />
      </div>
      <div className="about__container container grid">
        <div className="headshot__container">
          <img
            src="src/assets/images/profile-pic copy.png"
            alt="Henry Prosser"
            className="headshot__img"
          />
        </div>
        <div className="about__data">
          <p className="about__description">
            Hey, I'm Henry 👋 <br></br>
            <br></br>An aspiring Full-Stack Developer from the UK with a passion
            for designing and building functional, creative projects. With a
            strong foundation in Computer Science and a detail-oriented mindset,
            I'm always looking for opportunities to learn and develop my skills.
            When I'm not coding, you'll find me skiing, playing guitar, or
            working on side projects.
          </p>
          <a href="#" download className="download__button">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
