import { useContext } from "react";
import { ModalContext } from "../context/Modal";

import { GithubIcon } from "../assets/icons/Languages";
import { LinkedinIcon, EnvelopIcon } from "../assets/icons/SocialMedia";

const Footer = () => {
  const { handleModal } = useContext(ModalContext);

  return (
    <footer className="flex flex-col sm:flex-row items-center justify-around sm:mx-10 mt-10 mb-4">
      {/* social media group */}
      <p className="text-lg font-medium text-textForeground">Created by M-nogales with 🍭</p>
      <div className="flex justify-evenly gap-4">
        <a aria-label="go to my github" href="https://github.com/M-nogales" target="_blank" rel="noopener noreferrer">
          <GithubIcon className={"w-8 h-8 text-textForeground will-change-transform hover:fill-purple-400 hover:scale-110 transition-all duration-100"}/>
        </a>
        <a aria-label="go to my linkedin" href="https://www.linkedin.com/in/manuel-nogales-serrano/" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon className={"w-8 h-8 text-textForeground will-change-transform hover:fill-blue-400 hover:scale-110 transition-all duration-100"}/>
        </a>
        <button aria-label="open contact modal" onClick={handleModal}>
          <EnvelopIcon  className={"w-8 h-8 text-textForeground will-change-transform hover:fill-red-600 hover:scale-110 transition-all duration-100"}/>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
