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

      <AboutMe/>

      {/* skills */}
      {/* <section>
        <Skills />
      </section> */}
      {/* Experience */}
      <Experience />

      {/* Projects */}
      <h2 className="text-textForeground text-3xl font-bold m-8 mb-4 lg:m-16 lg:mb-4">Projects</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-8 lg:mx-16">
        <Projects
          url={"https://pagedone.io/asset/uploads/1688031162.jpg"}
          projectName={"KindMail"}
          description={`My final year project involved utilizing Redis and Socket.io (WebSockets) to develop a real-time chat application.`}
        >
          <ReactIcon className="w-8 h-10 fill-accentColor" />
          <RedisIcon className="w-8 h-10 fill-accentColor" />
          <SocketIcon className="w-8 h-10 fill-accentColor" />
        </Projects>
      </section>
    </main>
  );
}

export default App;