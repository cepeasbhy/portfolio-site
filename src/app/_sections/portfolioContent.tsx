"use client";

import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import AboutMe from "../_components/aboutmeInfo";
import TechStackInfo from "../_components/techStackInfo";
import ProjectsInfo from "../_components/projectInfo";
import CertificatesInfo from "../_components/certificateInfo";
import Navigation from "./Navigation";

export default function PortfolioContent() {
  const [isActive, setIsActive] = useState("about");

  function handleActiveState(isActive: string) {
    setIsActive(isActive);
  }

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <>
      <Navigation isActive={isActive} setIsActive={handleActiveState} />

      {isActive === "about" && <AboutMe />}
      {isActive === "tech" && <TechStackInfo />}
      {isActive === "projects" && <ProjectsInfo />}
      {isActive === "certs" && <CertificatesInfo />}
    </>
  );
}
