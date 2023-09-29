import PortfolioContent from "./_sections/portfolioContent";
import "./_styles/home.css";

export default function Home() {
  return (
    <main>
      <article id="profile" className="d-flex">
        <section id="image-content">
          <img src="/img/asbhy_cepe.jpg" width={200} height={200} alt="" />
        </section>
        <section id="profile-content">
          <div className="block">
            <p>WELCOME! MY NAME IS</p>
          </div>
          <div className="block">
            <p>ASBHY CEPE</p>
          </div>
          <div className="block">
            <p>WEB DEV | BACKEND</p>
          </div>
          <div className="block">
            <p>
              An aspiring developer seeking to have a successful career in the
              back end web development.
            </p>
          </div>
          <div id="social" className="block d-flex">
            <div className="social-item">
              <a
                href="https://www.linkedin.com/in/asbhy-cepe"
                rel="noreferrer noopener"
                target="_blank"
              >
                {" "}
                <img src="/img/soc_med/linkedin_icon.svg" alt="" />
              </a>
            </div>
            <div className="social-item">
              <a
                href="https://www.facebook.com/cepeasbhy"
                rel="noreferrer noopener"
                target="_blank"
              >
                <img src="/img/soc_med/facebook.svg" alt="" />
              </a>
            </div>
          </div>
        </section>
      </article>
      <article id="portfolio-content" className="d-flex">
        <PortfolioContent />
      </article>
    </main>
  );
}
