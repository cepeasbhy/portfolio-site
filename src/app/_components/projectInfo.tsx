export default function ProjectsInfo() {
  return (
    <section id="projects" className="d-flex" data-aos="fade-up">
      <div className="project-item d-flex">
        <div className="img-wrapper">
          <div id="weather-app"></div>
        </div>
        <div className="project-content">
          <div className="project-title">
            <h4>SKYMASTER APP</h4>
            <div className="ext-link d-flex">
              <div className="ext-link-item">
                <img src="/img/ext_link.svg" alt="" />
              </div>
              <div className="ext-link-item">
                <a href={"/projects/weatherApp"} rel="noreferrer noopener">
                  LIVE PREVIEW
                </a>
              </div>
            </div>
          </div>
          <div className="project-description">
            The SkyMaster App is powered by OpenWeather API that provides the
            user the current weather plus a 5 day weather forecast
          </div>
        </div>
      </div>
      <div className="project-item d-flex">
        <div className="img-wrapper">
          <div id="todo-app"></div>
        </div>
        <div className="project-content">
          <div className="project-title">
            <h4>TODO APP</h4>
            <div className="ext-link d-flex">
              <div className="ext-link-item">
                <img src="/img/ext_link.svg" alt="" />
              </div>
              <div className="ext-link-item">
                <a href={"/projects/todoApp"} rel="noreferrer noopener">
                  LIVE PREVIEW
                </a>
              </div>
            </div>
          </div>
          <div className="project-description">
            This is a simple todo app that allows the user to enter their tasks
            for the day
          </div>
        </div>
      </div>
      <div className="project-item d-flex">
        <div className="img-wrapper">
          <div id="tic-tac"></div>
        </div>
        <div className="project-content">
          <div className="project-title">
            <h4>TIC TAC TOE</h4>
            <div className="ext-link d-flex">
              <div className="ext-link-item">
                <img src="/img/ext_link.svg" alt="" />
              </div>
              <div className="ext-link-item">
                <a href={"/projects/ticTacToe"} rel="noreferrer noopener">
                  LIVE PREVIEW
                </a>
              </div>
            </div>
          </div>
          <div className="project-description">
            A web based application of Tic Tac Toe game complete with score
            tracking.
          </div>
        </div>
      </div>
      <div className="project-item d-flex">
        <div className="img-wrapper">
          <div id="crypto"></div>
        </div>
        <div className="project-content">
          <div className="project-title">
            <h4>CRYPTO CURRENT</h4>
            <div className="ext-link d-flex">
              <div className="ext-link-item">
                <img src="/img/ext_link.svg" alt="" />
              </div>
              <div className="ext-link-item">
                <a href={"/projects/cryptoCurrent"} rel="noreferrer noopener">
                  LIVE PREVIEW
                </a>
              </div>
            </div>
          </div>
          <div className="project-description">
            The CryptoCurrent App offers users up-to-date cryptocurrency data
            and enables them to explore their favorite coins.
          </div>
        </div>
      </div>
    </section>
  );
}
