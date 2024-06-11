import { GithubIcon } from "../assets/icons/Languages";
import { LinkedinIcon, EnvelopIcon } from "../assets/icons/SocialMedia.jsx";

const Footer = () => {
  // sadas
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-around sm:mx-10 my-4">
      {/* social media group */}
      <p className="text-lg font-medium">Created by M-nogales with 🍭</p>
      <div className="flex justify-evenly gap-4">
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
          <GithubIcon className={"w-8 h-8 fill-black"}/>
        </a>
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon className={"w-8 h-8 fill-black"}/>
        </a>
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
          <EnvelopIcon  className={"w-8 h-8 fill-black"}/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
