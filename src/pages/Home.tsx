import React, { useRef } from 'react';
import NavMenu from '@/@core/components/NavBar'; // Import NavMenu component

const SinglePageApp: React.FC = () => {
  // Create references for each section
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the specified section
  const scrollToSection = (section: string) => {
    const sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> } = {
      about: aboutRef,
      skills: skillsRef,
      experience: experienceRef,
      education: educationRef,
    };

    sectionRefs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Render the navigation menu */}
      <NavMenu onMenuClick={scrollToSection} />

      {/* Section Components */}
      <div ref={aboutRef} style={{ padding: '100px 0', height: '100vh', backgroundColor: '#f0f0f0' }}>
        <h2>About</h2>
        <p>This is the About section content.</p>
      </div>

      <div ref={skillsRef} style={{ padding: '100px 0', height: '100vh', backgroundColor: '#fafafa' }}>
        <h2>Skills</h2>
        <p>This is the Skills section content.</p>
      </div>

      <div ref={experienceRef} style={{ padding: '100px 0', height: '100vh', backgroundColor: '#f0f0f0' }}>
        <h2>Experience</h2>
        <p>This is the Experience section content.</p>
      </div>

      <div ref={educationRef} style={{ padding: '100px 0', height: '100vh', backgroundColor: '#fafafa' }}>
        <h2>Education</h2>
        <p>This is the Education section content.</p>
      </div>
    </div>
  );
};

export default SinglePageApp;
