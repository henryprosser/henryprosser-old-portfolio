export default function Footer() {
  return (
    <footer>
      <div className="footer__container container grid">
        <div className="footer__group">
          <div className="footer__line"></div>
          <div className="footer__social">
            <a
              href="https://www.linkedin.com/in/henry-prosser-2b9aa512a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="footer__social-link"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>

            <a
              href="https://github.com/henryprosser"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub page"
              className="footer__social-link"
            >
              <i className="ri-github-fill"></i>
            </a>
          </div>

          <span className="footer__copy">
            &#169; Copyright Henry Prosser. All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
