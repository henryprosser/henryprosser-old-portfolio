export default function Hero() {
  return (
    <section className="hero section">
      <img
        src="src/assets/images/mountain-bg.jpg"
        className="hero__bg"
        alt="Mountain Background"
      />
      <div className="hero__shadow"></div>
      <div className="hero__container container">
        <div className="hero__data">
          <h1 className="hero__title">Welcome to My World.</h1>
        </div>
      </div>
    </section>
  );
}
