import React, { useRef } from "react";
import NavMenu from "./components/NavBar"; // Import NavMenu component
import AboutMe from "./components/About";
import ProfessionalSummary from "./components/ProfessionalSummary";
import Experience from "./components/Experience";
import Education from "./components/Education";
import MySkill from "./components/MySkills";
import ContactMe from "./components/ContactMe";
import CustomParticle from "@/@core/components/ParticleBackground";
import './home.scss'

const SinglePageApp: React.FC = () => {
  // Create references for each section
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const contactMeRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the specified section
  const scrollToSection = (section: string) => {
    const sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> } = {
      about: aboutRef,
      skills: skillsRef,
      experience: experienceRef,
      education: educationRef,
      contactMe: contactMeRef,
    };

    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pb-3">
  
      {/* Render the navigation menu */}
      <NavMenu onMenuClick={scrollToSection} />
      <CustomParticle />
      {/* Section Components */}
      <div className="container">
        <div ref={aboutRef} className="mt-2">
        {/*  */}
          <AboutMe contactMeRef={contactMeRef} />
        </div>

        <div ref={skillsRef} >
          <ProfessionalSummary />
        </div>

        <div ref={experienceRef}>
          <Experience />
        </div>

        <div ref={educationRef}>
          <Education />
        </div>
        <div ref={educationRef}>
          <MySkill />
        </div>
        <div ref={contactMeRef}>
          <ContactMe />
        </div>
      </div>
    </div>
  );
}

export default SinglePageApp;
