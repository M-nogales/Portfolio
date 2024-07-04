import { useEffect } from "react";

import Home from "./components/Home";
import { AboutMe } from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
// import Skills from "./components/Skills";

import { ReactIcon, RedisIcon, SocketIcon } from "./assets/icons/Languages";
import { CodeSlashIcon } from "./assets/icons/Utilities";

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
      <Home/>

      <AboutMe/>

      {/* skills */}
      {/* <section>
        <Skills />
      </section> */}
      {/* Experience */}
      <Experience/>

      {/* Projects */}
      <h2 className="text-textForeground text-3xl font-bold m-8 mb-4 lg:m-16 lg:mb-4 flex gap-x-5 items-center"> <CodeSlashIcon className={"h-8"}/> Projects</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-8 lg:mx-16" id="Projects">
        <Projects
          path={"/projects/Kind.webp"}
          projectName={"KindMail"}
          description={`My final year project involved utilizing Redis and Socket.io (WebSockets) to develop a real-time chat application.`}
          alt={""}
          url={"https://github.com/mnsempty/KindMail.git"}
        >
          <ReactIcon className="w-8 h-10 fill-accentColor dark:fill-primary-400" />
          <RedisIcon className="w-8 h-10 fill-accentColor dark:fill-primary-400" />
          <SocketIcon className="w-8 h-10 fill-accentColor dark:fill-primary-400" />
        </Projects>
      </section>
    </main>
  );
}

export default App;