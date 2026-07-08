import React, { useState, lazy, Suspense } from "react";
import Section from "./common/Section"
import BackgroundEffects from "./common/BackgroundEffects"
const Header = lazy( () => import ("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const ProblemCount = lazy(() => import("./components/ProblemCount"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"))
const Services = lazy(() => import("./components/Services"))
const Experience = lazy(() => import("./components/Experience"))
const Contact = lazy( ()=> import("./components/Contact"))
const Footer = lazy(() => import("./components/Footer"))

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-coal text-white">
      <BackgroundEffects />
      <Header
        isMenuOpen={isMenuOpen}
        onToggle={() => setIsMenuOpen((value) => !value)}
        onNavigate={scrollToSection}
      />
      <Suspense fallback={<div className="px-5 py-10 text-center text-ash">Loading...</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div className="px-5 py-10 text-center text-ash">Loading...</div>}>
        <ProblemCount />
      </Suspense>
      <Suspense fallback={<div className="px-5 py-10 text-center text-ash">Loading...</div>}>
        <About />
      </Suspense>
      
      <Suspense fallback={<div className="px-5 py-10 text-center text-ash">Loading...</div>}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div className="px-5 py-10 text-center text-ash">Loading...</div>}>
        <Services />
      </Suspense>
      <Suspense fallback={<div className="px-5 py-10 text-center text-ash">Loading...</div>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div className="px-5 py-10 text-center text-ash">Loading...</div>}>
        <Experience />
      </Suspense>
      <Suspense fallback={<div className="px-5 py-10 text-center text-ash">Loading...</div>}>
        <Contact />
      </Suspense>
      <Suspense fallback={<div className="px-5 py-10 text-center text-ash">Loading...</div>}>
      <Footer/>
      </Suspense>
    </main>
  );
}
export default App;
