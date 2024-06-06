import { useEffect } from "react";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { ReactIcon } from "./assets/icons/ReactIcon";
function App() {
  useEffect(() => {
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (prefersDarkScheme) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  return (
    <>
      {/* home */}
      <section>
        <Home />
      </section>
      {/* skills */}
      <section>
        <Skills />
      </section>
      {/* Projects */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-2 mt-2 mx-4 lg:mx-8">
        <Projects url="https://pagedone.io/asset/uploads/1688031162.jpg">
          <ReactIcon/>
        </Projects>
        <Projects></Projects>
        <Projects></Projects>
        <Projects></Projects>
      </section>
    </>
  );
}

export default App;
