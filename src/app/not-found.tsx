import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function Custom404() {
  return (
    <div id="main-404">
      <div className="content-wrapper">
        <div className="image-content-404">
          <img src="/img/404.png" alt="" />
        </div>
        <div className="description-404">
          <p className="msg-title">PAGE NOT FOUND</p>
          <p className="msg-subtitle">
            The page that your are trying to access cannot be found, has been
            removed, or simply does not exist
          </p>
        </div>
        <a href="/" id="link-back-home">
          GO BACK HOME
        </a>
      </div>
    </div>
  );
}
