import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Qualifications from "./components/Qualifications";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Qualifications />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
