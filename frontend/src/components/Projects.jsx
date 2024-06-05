/* eslint-disable react/prop-types */
const Projects = ({url,children}) => {
  return (
    // <div className="flex flex-col md:flex-row gap-y-2 gap-x-2 justify-center mt-2 mx-4 lg:mx-8">
    <>
      {/* Projects TFG,KindMail BayGaming ilernastaff? working(spotify api consults)
      working(2nd e-commerce) */}
      <article className="group grid w-full place-content-center rounded-lg">
        <picture className="relative overflow-hidden rounded-lg">
          <img
            className="rounded-lg transition-all duration-300 group-hover:scale-110"
            src="https://pagedone.io/asset/uploads/1688031162.jpg"
            alt={url}
          />
          <footer className="absolute bottom-0 w-full overflow-hidden rounded-b-lg bg-white/60 px-8 py-2 backdrop-blur-sm dark:bg-gray-800/60">
            <h2 className="mt-1 md:mt-4 text-lg md:text-xl font-semibold capitalize text-gray-800 dark:text-white">
              Best website collections
            </h2>
            {/* finish this */}
            <div className="mt-2 text-lg uppercase tracking-wider text-blue-500 dark:text-blue-400">
            {children}
            </div>
          </footer>
        </picture>
      </article>
      </>
  );
};
export default Projects;
