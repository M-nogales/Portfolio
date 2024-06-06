import { GithubIcon } from "../assets/icons/Languages";
import { LinkedinIcon, EnvelopIcon } from "../assets/icons/SocialMedia.jsx";

const Footer = () => {
  // sadas
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-around sm:mx-10">
      {/* social media group */}
      <p className="text-lg font-medium">Created by M-nogales</p>
      <div className="flex justify-evenly gap-4">
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
          <GithubIcon />
        </a>
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon />
        </a>
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
          <EnvelopIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
