"use client";

import "aos/dist/aos.css";
import "./_styles/home.css";
import AOS from "aos";

import { useEffect } from "react";
import ProfileInfo from "./_sections/profileInfo";
import AboutMe from "./_sections/abotmeInfo";
import TechStackInfo from "./_sections/techStackInfo";
import CertificatesInfo from "./_sections/certificateInfo";
import ProjectsInfo from "./_sections/projectInfo";

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
