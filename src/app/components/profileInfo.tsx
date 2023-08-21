import Link from "next/link";

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
                <Link
                  rel="stylesheet"
                  href="https://www.facebook.com/cepeasbhy"
                  target="_blank"
                >
                  <img src="/img/soc_med/fb_icon.png" alt="" />
                </Link>
              </div>
              <div className="media-item">
                <Link
                  href="https://www.linkedin.com/in/asbhy-cepe/"
                  target="_blank"
                >
                  <img src="/img/soc_med/linkedin_icon.png" alt="" />
                </Link>
              </div>
              <div className="media-item">
                <Link href="https://github.com/cepeasbhy" target="_blank">
                  <img src="/img/soc_med/github_icon.png" alt="" />
                </Link>
              </div>
              <div className="media-item">
                <Link href="mailto:asbhycepe01@gmail.com">
                  <img src="/img/soc_med/email_icon.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
