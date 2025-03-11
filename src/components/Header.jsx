import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");
    const navLinks = document.querySelectorAll(".nav__link");

    /* Menu show */
    const showMenu = () => {
      console.log("toggle clicked");
      navMenu.classList.add("show-menu");
    };

    /* Menu hidden */
    const hideMenu = () => {
      console.log("close clicked");
      navMenu.classList.remove("show-menu");
    };

    /* Remove menu on mobile */
    const linkAction = () => {
      navMenu.classList.remove("show-menu");
    };

    if (navToggle) navToggle.addEventListener("click", showMenu);
    if (navClose) navClose.addEventListener("click", hideMenu);
    navLinks.forEach((n) => n.addEventListener("click", linkAction));

    // Cleanup event listeners on unmount
    return () => {
      if (navToggle) navToggle.removeEventListener("click", showMenu);
      if (navClose) navClose.removeEventListener("click", hideMenu);
      navLinks.forEach((n) => n.removeEventListener("click", linkAction));
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__line"></div>
        <div className="nav__menu" id="nav-menu">
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

          {/* Close button */}
          <div className="nav__close" id="nav-close">
            <i className="ri-close-line"></i>
          </div>
        </div>

        {/* Toggle button */}
        <div className="nav__toggle" id="nav-toggle">
          <i className="ri-menu-fill"></i>
        </div>
      </nav>
    </header>
  );
}
