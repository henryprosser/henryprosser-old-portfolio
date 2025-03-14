export default function Footer() {
  return (
    <footer>
      <div class="footer__container container grid">
        <div class="footer__group">
          <div className="nav__line"></div>
          <div class="footer__social">
            <a
              href="https://www.linkedin.com/in/henry-prosser-2b9aa512a/"
              target="_blank"
              class="footer__social-link"
            >
              <i class="ri-linkedin-box-fill"></i>
            </a>

            <a
              href="https://github.com/henryprosser"
              target="_blank"
              class="footer__social-link"
            >
              <i class="ri-github-fill"></i>
            </a>
          </div>

          <span class="footer__copy">
            &#169; Copyright Henry Prosser. All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
