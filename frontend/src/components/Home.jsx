import { useContext } from "react";
import { ModalContext } from "../context/Modal";
import useTyping from "../Hooks/Typing";

import { DownloadIcon } from "../assets/icons/Utilities";
import { GithubIcon } from "../assets/icons/Languages";
import { LinkedinIcon, EnvelopIcon } from "../assets/icons/SocialMedia";

const Home = () => {
  const { handleModal } = useContext(ModalContext);
  const typingRef = useTyping(
    ["FULL STACK DEVELOPER 🧑‍💻", "MANCHEGO 🌍", "RACOON LOVER 🦝"],
    {
      loop: true,
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1000, // Delay before backspacing
    }
  );
  return (
    <section className="flex flex-col items-center justify-center" id="Home">
      <img
        src="/manu.webp"
        alt="Literally me"
        className="w-32 h-32 md:w-60 md:h-60 ring-4 border-primary-400 rounded-full"
      />
      <h1 className="text-xl sm:text-4xl text-wrap font-semibold mt-4 mb-2 mx-4 md:mx-8 text-textForeground">
        Hi!, I&apos;m M-nogales! and I&apos;m...
      </h1>
      <p className="mx-4 md:mx-8 sm:text-xl text-wrap text-center text-textForeground">
        <span ref={typingRef}></span>
      </p>
      <footer className="m-6 flex gap-x-2 items-center">
        <a href="/download/CV_Manuel_Nogales_Serrano.pdf" download="CV_Manuel_Nogales_Serrano.pdf" className="ps-6 pe-4 py-3 rounded-lg text-textForeground will-change-transform hover:bg-primary-400 hover:text-white ring-2 ring-primary-500 flex gap-x-2 ">
          Download CV
          <DownloadIcon className={" ms-2 w-5 h-5 fill-current "} />
        </a>
        <a aria-label="go to my github" href="https://github.com/M-nogales" target="_blank" rel="noopener noreferrer">
          <GithubIcon
            className={
              "w-8 h-8 text-textForeground will-change-transform hover:fill-purple-600 hover:scale-110 transition-all duration-100"
            }
          />
        </a>
        <a aria-label="go to my linkedin" href="https://www.linkedin.com/in/manuel-nogales-serrano/" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon
            className={
              "w-8 h-8 text-textForeground will-change-transform hover:fill-blue-400 hover:scale-110 transition-all duration-100"
            }
          />
        </a>
        <button aria-label="open contact modal" onClick={handleModal}>
          <EnvelopIcon
            className={
              "w-8 h-8 text-textForeground will-change-transform hover:fill-red-600 hover:scale-110 transition-all duration-100"
            }
          />
        </button>
      </footer>
    </section>
  );
};
export default Home;
