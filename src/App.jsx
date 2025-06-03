// src/App.js
import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import TechStack from './Components/TechStack';
import WorkExperience from './Components/WorkExperience';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="h-full w-full mx-auto max-w-[47.5rem] p-9 text-gray-300">
      <Header />
      <Hero />
      <TechStack />
      <WorkExperience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
