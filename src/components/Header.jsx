import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");
    const navLinks = document.querySelectorAll(".nav__link");

    /* Show menu */
    const showMenu = () => {
      navMenu.classList.add("show-menu");
      navClose.style.display = "flex";
      navToggle.style.display = "none"; // Hide toggle button
    };

    /* Hide menu */
    const hideMenu = () => {
      navMenu.classList.remove("show-menu");
      navClose.style.display = "none";
      navToggle.style.display = "flex"; // Show toggle button again
    };

    /* Remove menu when clicking a nav link */
    const linkAction = () => {
      navMenu.classList.remove("show-menu");
      navClose.style.display = "none";
      navToggle.style.display = "flex";
    };

    if (navToggle) navToggle.addEventListener("click", showMenu);
    if (navClose) navClose.addEventListener("click", hideMenu);
    navLinks.forEach((n) => n.addEventListener("click", linkAction));

    return () => {
      if (navToggle) navToggle.removeEventListener("click", showMenu);
      if (navClose) navClose.removeEventListener("click", hideMenu);
      navLinks.forEach((n) => n.removeEventListener("click", linkAction));
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__logo">
          <img
            src="src/assets/images/nav-logo.svg"
            className="nav__logo"
            alt="Henry logo"
          />
        </div>
        <div
          className={`nav__menu ${isScrolled ? "scrolled" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#qualifications" className="nav__link">
                Qualifications
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="nav__group">
          <div className="nav__social">
            <a
              href="https://www.linkedin.com/in/henry-prosser-2b9aa512a/"
              target="_blank"
              className="nav__social-link"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>

            <a
              href="https://github.com/henryprosser"
              target="_blank"
              className="nav__social-link"
            >
              <i className="ri-github-fill"></i>
            </a>
          </div>

          {/* Close button */}
          <div className="nav__close" id="nav-close">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_454_207)">
                <path
                  d="M7.7275 9L0.713867 1.98635L1.98666 0.713562L9.00028 7.72713L16.0139 0.713562L17.2867 1.98635L10.2731 9L17.2867 16.0135L16.0139 17.2864L9.00028 10.2728L1.98666 17.2864L0.713867 16.0135L7.7275 9Z"
                  fill="#C4C4C4"
                />
              </g>
              <defs>
                <clipPath id="clip0_454_207">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        {/* Toggle button */}
        <div className="nav__toggle" id="nav-toggle">
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_454_201)">
              <path
                d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z"
                fill="#C4C4C4"
              />
            </g>
            <defs>
              <clipPath id="clip0_454_201">
                <rect width="18" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </nav>
    </header>
  );
}
