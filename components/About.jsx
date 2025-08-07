"use client";

import { useTheme } from '../context/ThemeContext';
import AboutAnimatedContent from "./AboutAnimatedContent";

const About = () => {
  const { theme } = useTheme();
  
  return (
    <section 
      id="about" 
      className={`relative w-full min-h-[100vh] text-white flex flex-col justify-center py-8 lg:py-20 overflow-hidden 
        ${
        theme === 'dark' ? 'bg-black1' : 'bg-purple-800'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-16 flex flex-col justify-center gap-5">
        <AboutAnimatedContent />
      </div>
    </section>
  );
};

export default About;