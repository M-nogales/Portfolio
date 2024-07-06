import { ArrowIcon } from "../assets/icons/Utilities";

/* eslint-disable react/prop-types */
const Projects = ({path, url, alt, w, h, children, projectName, description}) => {
  return (
    <>
      <article className="group grid w-full place-content-center rounded-lg ">
        <picture className="relative overflow-hidden rounded-lg">
          <img
            className="h-full rounded-lg group-hover:scale-110 group-hover:brightness-50 transition-all duration-300 pointer-events-none"
            loading="lazy"
            width={w}
            height={h}
            src={path}
            alt={alt}
          />
          <a aria-label="see code on github" href={url} target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white absolute top-7 right-8 rounded-full py-2 px-4 hidden group-hover:block"><ArrowIcon className={"w-6 h-6 fill-white origin-center -rotate-45"}/></a>
          <p className="text-white absolute top-1/3 left-8 me-3 hidden group-hover:block">
          {description}
          </p>
          
          <footer className="absolute bottom-0 w-full overflow-hidden rounded-b-lg group-hover:opacity-0 transition-opacity duration-300 ease-in-out bg-white/60 px-8 py-1 backdrop-blur-sm dark:bg-gray-800/60">
            <h2 className="mt-1 md:mt-4 text-lg md:text-xl font-semibold capitalize text-gray-800 dark:text-white">
              {projectName}
            </h2>
            <div className="mt-2 flex gap-x-2">
            {children}
            </div>
          </footer>
        </picture>
      </article>
      </>
  );
};
export default Projects;
