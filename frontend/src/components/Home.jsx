import MyImage from "../assets/manu.png";
import { GithubIcon } from "../assets/icons/Languages";
import { LinkedinIcon } from "../assets/icons/SocialMedia";
import { EnvelopIcon } from "../assets/icons/SocialMedia";
import useTyping from "../Hooks/Typing";

const Home = () => {
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
    <section className="flex flex-col items-center justify-center">
      <img
        src={MyImage}
        alt="Literally me"
        className="w-32 h-32 md:w-60 md:h-60 ring-4 border-emerald-400 rounded-full"
      />
      <h1 className="text-xl text-wrap font-semibold mx-4 md:mx-8 md:text-2xl ">
        Hi!, I`m M-nogales! and I`m...
      </h1>
      <p className="mx-4 md:mx-8 text-wrap text-center">
        <span ref={typingRef}></span>
      </p>
      <footer className="m-6 flex gap-x-2 items-center">
        <a className="p-4 rounded-lg bg-blue-600">CV+icnDOWN</a>
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
          <GithubIcon  className={"w-8 h-8 fill-black"}/>
        </a>
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon  className={"w-8 h-8 fill-black"}/>
        </a>
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
          <EnvelopIcon className={"w-8 h-8 fill-black"}/>
        </a>
      </footer>
    </section>
  );
};
export default Home;
