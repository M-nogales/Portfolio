import { GithubIcon } from "../assets/icons/Languages";
import { LinkedinIcon, EnvelopIcon } from "../assets/icons/SocialMedia.jsx";

const Footer = () => {
  // sadas
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-around sm:mx-10 mt-10 mb-4">
      {/* social media group */}
      <p className="text-lg font-medium">Created by M-nogales with 🍭</p>
      <div className="flex justify-evenly gap-4">
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
          <GithubIcon className={"w-8 h-8 fill-black hover:fill-purple-400 hover:scale-110 transition-all duration-100"}/>
        </a>
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon className={"w-8 h-8 fill-black hover:fill-blue-400 hover:scale-110 transition-all duration-100"}/>
        </a>
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
          <EnvelopIcon  className={"w-8 h-8 fill-black hover:fill-red-600 hover:scale-110 transition-all duration-100"}/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
