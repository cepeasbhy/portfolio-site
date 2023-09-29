"use client";

import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import AboutMe from "../_components/abotmeInfo";
import TechStackInfo from "../_components/techStackInfo";
import ProjectsInfo from "../_components/projectInfo";
import CertificatesInfo from "../_components/certificateInfo";

export default function PortfolioContent() {
  const [isActive, setIsActive] = useState("about");

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <>
      <nav>
        <div
          className={"nav-item " + (isActive === "about" && "nav-active")}
          onClick={() => setIsActive("about")}
        >
          ABOUT
        </div>
        <div
          className={"nav-item " + (isActive === "tech" && "nav-active")}
          onClick={() => setIsActive("tech")}
        >
          TECH
        </div>
        <div
          className={"nav-item " + (isActive === "projects" && "nav-active")}
          onClick={() => setIsActive("projects")}
        >
          PROJECTS
        </div>
        <div
          className={"nav-item " + (isActive === "certs" && "nav-active")}
          onClick={() => setIsActive("certs")}
        >
          CERTIFICATIONS
        </div>
      </nav>

      {isActive === "about" && <AboutMe />}
      {isActive === "tech" && <TechStackInfo />}
      {isActive === "projects" && <ProjectsInfo />}
      {isActive === "certs" && <CertificatesInfo />}
    </>
  );
}
