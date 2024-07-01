import { useEffect } from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { ReactIcon, RedisIcon, SocketIcon } from "./assets/icons/Languages";
// import Skills from "./components/Skills";
import Experience from "./components/Experience";
import { AboutMe } from "./components/AboutMe";

// https://tailwindcss-animations.vercel.app/
// https://console.cloud.google.com/marketplace/product/google/gmail.googleapis.com?pli=1
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
    <main className="mx-auto max-w-screen-lg">
      {/* home */}
      <Home />

      <h2 className="text-3xl font-bold my-8 mx-8 lg:mx-16">About Me</h2>
      <AboutMe/>

      {/* skills */}
      {/* <section>
        <Skills />
      </section> */}
      {/* Experience */}
      <h2 className="text-3xl font-bold my-8 mx-8 lg:mx-16">Experience</h2>
      <Experience />

      {/* Projects */}
      <h2 className="text-3xl font-bold my-8 mx-8 lg:mx-16">Projects</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 mt-2 mx-8 lg:mx-16">
        <Projects
          url={"https://pagedone.io/asset/uploads/1688031162.jpg"}
          projectName={"KindMail"}
          description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui excepturi doloribus sit fugit delectus! Nostrum eligendi doloribus blanditiis?`}
        >
          <ReactIcon className="w-8 h-10 fill-white" />
          <RedisIcon className="w-8 h-10 fill-white" />
          <SocketIcon className="w-8 h-10 fill-white" />
        </Projects>
        <Projects
          url={"https://pagedone.io/asset/uploads/1688031162.jpg"}
          projectName={"BayGaming"}
        ></Projects>
        <Projects
          url={"https://pagedone.io/asset/uploads/1688031162.jpg"}
          projectName={"Soundfy"}
        ></Projects>
        <Projects
          url={"https://pagedone.io/asset/uploads/1688031162.jpg"}
          projectName={""}
        ></Projects>
      </section>
    </main>
  );
}

export default App;
