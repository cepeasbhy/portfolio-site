export default function ProfileInfo() {
  return (
    <div id="profile-section">
      <div className="section-wrapper">
        <div id="profile-content" data-aos="fade-up">
          <div id="profile-image">
            <img src="/img/asbhy_cepe.jpg" alt="" />
          </div>
          <div id="profile-description">
            <div className="text-description">
              <p id="profile-title">ASBHY CEPE</p>
              <p id="profile-subtitle">Back End Developer</p>
            </div>
            <div id="profile-media">
              <div className="media-item">
                <img src="/img/soc_med/fb_icon.png" alt="" />
              </div>
              <div className="media-item">
                <img src="/img/soc_med/linkedin_icon.png" alt="" />
              </div>
              <div className="media-item">
                <img src="/img/soc_med/github_icon.png" alt="" />
              </div>
              <div className="media-item">
                <img src="/img/soc_med/email_icon.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
