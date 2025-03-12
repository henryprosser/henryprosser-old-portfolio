import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Qualifications from "./components/Qualifications";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Qualifications />
      </main>
    </>
  );
}
