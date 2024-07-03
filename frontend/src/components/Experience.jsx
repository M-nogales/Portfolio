const EXPERIENCE = [
  {
    title: "Ayesa",
    time: "March.2024 - june.2024",
    description: `I completed my internship with the SIRHUS project,
     a government initiative where I utilized my expertise in MySQL
      databases to work with the project's Oracle database.`,
  },
];
const Experience = () => {
  return (
    <>
      <section className="flex flex-col gap-2 m-8 lg:m-16">
      <h2 className="text-textForeground text-3xl font-bold mb-4">Experience</h2>

        <ol className="relative border-s border-primary-900 dark:border-gray-700">
          {EXPERIENCE.map((experience, index) => (
            <li key={index} className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-3 h-3 bg-blue-500 rounded-full mt-2 -start-1.5 dark:bg-blue-900"></span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-gray-400">
                {experience.title}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {experience.time}
              </time>
              <p className="mb-4 text-base font-normal text-textForeground">
                {experience.description}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
};
export default Experience;
