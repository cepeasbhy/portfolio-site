export default function ProjectsInfo() {
  return (
    <div id="projects-section">
      <div className="section-wrapper">
        <div className="section-title">
          <p>My Projects</p>
        </div>
        <div className="section-content">
          <div className="card" data-aos="flip-left">
            <div className="card-img">
              <div id="weather-app"></div>
            </div>
            <div className="card-content">
              <div className="card-title">WEATHER APP</div>
              <div className="card-description">
                <p>
                  A simple web-based application that provide users with weather
                  data and includes search functionality of locations. It is
                  powered through OpenWeather API for providing weather data.
                </p>
              </div>
              <div className="live-link">
                <a href="/projects/weatherApp">Live Demo</a>
              </div>
            </div>
          </div>
          <div className="card" data-aos="flip-left">
            <div className="card-img">
              <div id="todo-app"></div>
            </div>
            <div className="card-content">
              <div className="card-title">TO DO APP</div>
              <div className="card-description">
                <p>
                  A simple web-based application that allows user to keep track
                  of their current tasks.
                </p>
              </div>
              <div className="live-link">
                <a href="/projects/todoApp">Live Demo</a>
              </div>
            </div>
          </div>
          <div className="card" data-aos="flip-left">
            <div className="card-img">
              <div id="tic-tac"></div>
            </div>
            <div className="card-content">
              <div className="card-title">TIC TAC TOE</div>
              <div className="card-description">
                <p>
                  A web based application of TIC TAC TOE game complete with
                  score tracking.
                </p>
              </div>
              <div className="live-link">
                <a href="/projects/ticTacToe">Live Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
