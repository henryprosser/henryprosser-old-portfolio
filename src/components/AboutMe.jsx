export default function AboutMe() {
  return (
    <section className="about section">
      <div className="about__container container grid">
        <div className="about__data">
          <h2 className="about__title">About Me</h2>
          <div className="headshot__container">
            <img
              src="src/assets/images/profile-pic copy.png"
              alt="Henry Prosser"
              className="headshot__img"
            />
          </div>
          <p className="about__description">
            Hey, I'm Henry 👋 <br></br>
            <br></br>An aspiring Full-Stack Developer from the UK with a strong
            foundation in Computer Science. I enjoy building functional and
            intuitive web applications, whether it's crafting user-friendly
            interfaces or optimising backend performance. When I'm not coding,
            you'll find me skiing, playing guitar, or working on side projects.
          </p>
          <a href="#" download className="download__button">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
