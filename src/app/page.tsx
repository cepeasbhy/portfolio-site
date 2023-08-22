"use client";

import "aos/dist/aos.css";
import "./home.css";
import AOS from "aos";

import { useEffect } from "react";
import ProfileInfo from "./components/profileInfo";
import AboutMe from "./components/abotmeInfo";
import TechStackInfo from "./components/techStackInfo";
import CertificatesInfo from "./components/certificateInfo";
import ProjectsInfo from "./components/projectInfo";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <main>
      <ProfileInfo />
      <AboutMe />
      <TechStackInfo />
      <CertificatesInfo />
      <ProjectsInfo />
    </main>
  );
}
