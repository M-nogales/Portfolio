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
      <h1 className="text-xl text-wrap font-semibold mt-4 mb-2 mx-4 md:mx-8 md:text-2xl text-textForeground">
        Hi!, I&apos;m M-nogales! and I&apos;m...
      </h1>
      <p className="mx-4 md:mx-8 text-wrap text-center text-textForeground">
        <span ref={typingRef}></span>
      </p>
      <footer className="m-6 flex gap-x-2 items-center">
        <a className="ps-6 pe-4 py-3 rounded-lg text-textForeground hover:bg-primary-400 hover:text-white ring-2 ring-primary-400 flex gap-x-2 " href="../assets/CV" download="../assets/CV">
          Download CV
          <DownloadIcon className={" ms-2 w-5 h-5 fill-current "} />
        </a>
        <a href="https://github.com/M-nogales" target="_blank" rel="noopener noreferrer">
          <GithubIcon
            className={
              "w-8 h-8 text-textForeground hover:fill-purple-600 hover:scale-110 transition-all duration-100"
            }
          />
        </a>
        <a href="https://www.linkedin.com/in/manuel-nogales-serrano/" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon
            className={
              "w-8 h-8 text-textForeground hover:fill-blue-400 hover:scale-110 transition-all duration-100"
            }
          />
        </a>
        <button onClick={handleModal}>
          <EnvelopIcon
            className={
              "w-8 h-8 text-textForeground hover:fill-red-600 hover:scale-110 transition-all duration-100"
            }
          />
        </button>
      </footer>
    </section>
  );
};
export default Home;
