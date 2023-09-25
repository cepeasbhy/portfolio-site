export default function CertificatesInfo() {
  return (
    <div id="cert-section">
      <div className="section-wrapper">
        <div className="section-title">
          <p>Certifications</p>
        </div>
        <div className="cert-content" data-aos="zoom-in">
          <div className="cert-item">
            <div className="cert-img">
              <img src="/img/certs/CCNAITN.png" alt="" />
            </div>
            <div className="cert-description">
              <p>Introduction to Networks</p>
            </div>
          </div>
          <div className="cert-item">
            <div className="cert-img">
              <img src="/img/certs/cloud_101.png" alt="" />
            </div>
            <div className="cert-description">
              <p>
                Introduction to Cloud <br />
                Computing 101
              </p>
            </div>
          </div>
          <div className="cert-item">
            <div className="cert-img">
              <img src="/img/certs/CyberEssentials.png" alt="" />
            </div>
            <div className="cert-description">
              <p>Cyber Essentials</p>
            </div>
          </div>
          <div className="cert-item">
            <div className="cert-img">
              <img src="/img/certs/I2CS.png" alt="" />
            </div>
            <div className="cert-description">
              <p>Introduction to CyberSecurity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
