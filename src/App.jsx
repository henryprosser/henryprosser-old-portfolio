import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Qualifications from "./components/Qualifications";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Qualifications />
        <Skills />
        <Portfolio />
      </main>
    </>
  );
}
