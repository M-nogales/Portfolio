import { ArrowUpRightIcon } from "../assets/icons/Utilities";

/* eslint-disable react/prop-types */
const Projects = ({url, children, projectName}) => {
  return (
    // <div className="flex flex-col md:flex-row gap-y-2 gap-x-2 justify-center mt-2 mx-4 lg:mx-8">
    <>
      {/* Projects TFG,KindMail BayGaming ilernastaff? working(spotify api consults)
      working(2nd e-commerce) */}
      <article className="group grid w-full place-content-center rounded-lg">
        <picture className="relative overflow-hidden rounded-lg">
          <img
            className="rounded-lg group-hover:scale-110 group-hover:brightness-50 transition-all duration-300"
            src="https://pagedone.io/asset/uploads/1688031162.jpg"
            alt={url}
          />
          <button className="bg-gray-500 text-white absolute top-7 right-8 rounded-md py-2 px-4 hidden group-hover:block"><ArrowUpRightIcon className={"w-6 h-6 fill-white"}/></button>
          <p className="text-white absolute top-1/3 left-8 me-3 hidden group-hover:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A quae eum facilis sequi nam. Consectetur optio velit eos dolorem dolorum tenetur eveniet officiis perferendis, cumque, pariatur sint animi ea itaque.
          </p>
          
          <footer className="absolute bottom-0 w-full overflow-hidden rounded-b-lg group-hover:opacity-0 transition-opacity duration-300 ease-in-out bg-white/60 px-8 py-2 backdrop-blur-sm dark:bg-gray-800/60">
            <h2 className="mt-1 md:mt-4 text-lg md:text-xl font-semibold capitalize text-gray-800 dark:text-white">
              {projectName}
            </h2>
            {/* finish this */}
            <div className="mt-2 text-lg uppercase tracking-wider flex gap-x-2 text-blue-500 dark:text-blue-400">
            {children}
            </div>
          </footer>
        </picture>
      </article>
      </>
  );
};
export default Projects;
