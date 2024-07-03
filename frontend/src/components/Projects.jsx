import { ArrowIcon } from "../assets/icons/Utilities";

/* eslint-disable react/prop-types */
const Projects = ({url, alt, children, projectName, description}) => {
  return (
    // <div className="flex flex-col md:flex-row gap-y-2 gap-x-2 justify-center mt-2 mx-4 lg:mx-8">
    <>
      {/* Projects TFG,KindMail BayGaming ilernastaff? working(spotify api consults)
      working(2nd e-commerce) */}
      <article className="group grid w-full place-content-center rounded-lg">
        <picture className="relative overflow-hidden rounded-lg">
          <img
            className="rounded-lg group-hover:scale-110 group-hover:brightness-50 transition-all duration-300"
            src={url}
            alt={alt}
          />
          <button className="bg-gray-500 text-white absolute top-7 right-8 rounded-full py-2 px-4 hidden group-hover:block"><ArrowIcon className={"w-6 h-6 fill-white origin-center -rotate-45"}/></button>
          <p className="text-white absolute top-1/3 left-8 me-3 hidden group-hover:block">
          {description}
          </p>
          
          <footer className="absolute bottom-0 w-full overflow-hidden rounded-b-lg group-hover:opacity-0 transition-opacity duration-300 ease-in-out bg-white/60 px-8 py-2 backdrop-blur-sm dark:bg-gray-800/60">
            <h2 className="mt-1 md:mt-4 text-lg md:text-xl font-semibold capitalize text-gray-800 dark:text-white">
              {projectName}
            </h2>
            {/* finish this */}
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
