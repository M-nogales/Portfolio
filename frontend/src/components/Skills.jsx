import {
  ExpressIcon,
  GithubIcon,
  JavaScriptIcon,
  MongoDBIcon,
  MySqlIcon,
  ReactIcon,
  RedisIcon,
  TailwindCSSIcon,
} from "../assets/icons/Languages";

const Skills = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-2 mx-4 lg:mx-8">
        <article className="grid grid-rows-2 grid-flow-col gap-x-2 w-full">
          <div className="mb-1 text-center text-white rounded-lg bg-black flex flex-col ">
            <h3 className="text-base md:text-xl"> Frontend</h3>
            <div className="w-full flex flex-row justify-evenly p-2">
              <GithubIcon className="w-8 h-8 md:w-16 md:h-16 fill-white" />
              <ReactIcon className="w-8 h-8 md:w-16 md:h-16 fill-white" />
              <TailwindCSSIcon className="w-8 h-8 md:w-16 md:h-16 fill-white" />
            </div>
          </div>
          <div className="mt-1 text-center text-white rounded-lg bg-black flex flex-col">
            <h3 className="text-base md:text-xl"> Backend</h3>
            <div className="w-full flex flex-row justify-evenly p-2">
              <JavaScriptIcon className="w-8 h-8 md:w-16 md:h-16 fill-white" />
              <ExpressIcon className="w-8 h-8 md:w-16 md:h-16 fill-white" />
              <MongoDBIcon className="w-8 h-8 md:w-16 md:h-16 fill-white" />
            </div>
          </div>
          <div className="h-full text-center text-white rounded-lg bg-black flex flex-col grid-rows-subgrid row-span-2">
            <h3 className="text-base md:text-xl"> Otras Tecnologías</h3>
            <div className="grid grid-rows-3 lg:grid-rows-2 grid-flow-col place-content-evenly items-center h-full my-2 md:p-1">
              <ReactIcon className="w-8 h-8 md:w-16 md:h-16 fill-white" />
              <RedisIcon className="w-8 h-8 md:w-16 md:h-16 fill-white" />
              <ReactIcon className="w-8 h-8 md:w-16 md:h-16 fill-white" />
              <MySqlIcon className="w-8 h-8 md:w-16 md:h-16 fill-white" />
              <ReactIcon className="w-8 h-8 md:w-16 md:h-16 fill-white" />
              <ReactIcon className="w-8 h-8 md:w-16 md:h-16 fill-white" />
              <ReactIcon className="w-8 h-8 md:w-16 md:h-16 fill-white" />
              <ReactIcon className="w-8 h-8 md:w-16 md:h-16 fill-white" />
              <ReactIcon className="w-8 h-8 md:w-16 md:h-16 fill-white" />
              <ReactIcon className="w-8 h-8 md:w-16 md:h-16 fill-white" />
              <ReactIcon className="w-8 h-8 md:w-16 md:h-16 fill-white" />
              <ReactIcon className="w-8 h-8 md:w-16 md:h-16 fill-white" />
            </div>
          </div>
        </article>

        {/* <p>frontend: React figma tailwind</p>
      <p>backend: express mongoDB</p>
      <h3>Otra tecnologias que he utilizado</h3>
      <p>python,php,laravel,sass,figma,</p>
      <p>docker,Sql,Redis,Socket.io(WebSockets),java,nodejs,git/github</p> */}
      </div>
    </>
  );
};
export default Skills;
