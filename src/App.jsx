import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Qualifications from "./components/Qualifications";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Qualifications />
        <Skills />
      </main>
    </>
  );
}
