import { useEffect } from "react";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { ReactIcon, RedisIcon, SocketIcon } from "./assets/icons/Languages";
import { EmailModal } from "./components/EmailModal";
import Experience from "./components/Experience";


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
    <>
      {/* home */}
      <section>
        <Home />
      </section>
      {/* skills */}
      <section>
        <Skills />
      </section>
      <section>
      {/* Experience */}
      <Experience/>
      </section>
      {/* Projects */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-2 mt-2 mx-4 lg:mx-8">
        <Projects url="https://pagedone.io/asset/uploads/1688031162.jpg" projectName={"KindMail"}>
          <ReactIcon className="w-8 h-10 fill-white" />
          <RedisIcon className="w-8 h-10 fill-white" />
          <SocketIcon className="w-8 h-10 fill-white" />
        </Projects>
        <Projects projectName={"BayGaming"}></Projects>
        <Projects projectName={"Soundfy"}></Projects>
        <Projects projectName={""}></Projects>
      </section>
      <EmailModal ></EmailModal>
    </>
  );
}

export default App;
