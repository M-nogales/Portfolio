import { PersonCheckIcon } from "../assets/icons/Utilities";

export const AboutMe = () => {
  return (
    <section className="m-8 lg:m-16" id="About_Me">
      <h2 className="text-textForeground text-2xl sm:text-3xl font-bold mb-6 flex gap-x-5 items-center"><PersonCheckIcon className={"h-8 sm:h-9"} />About Me</h2>
      <p className="mb-4 text-base sm:text-lg text-textForeground">
        Hello, my name is Manuel Nogales Serrano, but everyone calls me <strong className="text-accentColor">Manu</strong>.
        I&apos;ve been a programmer since I was <strong className="text-accentColor">16 years old</strong>, thanks to my
        teacher, Paco, who introduced me to the basics of programming. Under his
        guidance, I created my first website dedicated to the band
        &quot;Extremoduro&quot;.
      </p>
      <p className="text-base sm:text-lg text-textForeground">
        Currently, I hold a <strong className="text-accentColor">Higher Technician degree in Web Development</strong>, and I
        am eager to demonstrate my skills in a professional setting.
      </p>
    </section>
  );
};
