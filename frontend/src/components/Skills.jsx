import {
  ExpressIcon,
  GithubIcon,
  JavaScriptIcon,
  MongoDBIcon,
  ReactIcon,
  TailwindCSSIcon,
} from "../assets/icons/Languages";

const Skills = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 mx-4 lg:mx-8">
      <article className="grid grid-rows-2 grid-flow-col gap-x-2 w-full md:w-2/5">
        <div className="mb-1 h-30 text-center text-white rounded-lg bg-red-500 flex flex-col ">
          Frontend
          <div className="mt-1 w-full flex flex-row justify-evenly">
            <GithubIcon />
            <ReactIcon />
            <TailwindCSSIcon />
          </div>
        </div>
        <div className="mt-1 h-30 text-center text-white rounded-lg bg-emerald-500 flex flex-col">
          Backend
          <div className="mt-1 w-full flex flex-row justify-evenly">
            <JavaScriptIcon />
            <ExpressIcon />
            <MongoDBIcon />
          </div>
        </div>
        <div className="h-40 text-center text-white rounded-lg bg-orange-500 flex flex-col grid-rows-subgrid row-span-2">
          Otras Tecnologías
          <div className="grid grid-rows-3 lg:grid-rows-2 grid-flow-col place-content-evenly items-center h-full my-2 md:p-1">
            <ReactIcon />
            <ReactIcon />
            <ReactIcon />
            <ReactIcon />
            <ReactIcon />
            <ReactIcon />
            <ReactIcon />
            <ReactIcon />
            <ReactIcon />
            <ReactIcon />
            <ReactIcon />
            <ReactIcon />
          </div>
        </div>
      </article>

      <article className="flex justify-evenly w-full md:w-3/12 h-28 md:h-40 group rounded-lg bg-red-500">
        <div className="flex flex-col">
          <h2 className="text-lg text-center md:text-xl font-bold text-white">
            Experiencia
          </h2>
          <div className="flex mt-2.5 h-full md:mt-0 md:mb-5 md:items-center">
            <picture>
              <img
                className="w-10 h-10 me-1"
                src="https://media.licdn.com/dms/image/D4D0BAQG1BhZEpMiAVQ/company-logo_200_200/0/1706799581320/ayesa_logo?e=1725494400&v=beta&t=bEx9HfdNJOUVHgNm52UFcsOeev2XHQDBoZtdWKk_Ots"
                alt="Ayesa Logo"
              />
            </picture>
            <ul>
              <li>
                <p className="text-base font-semibold text-slate-800">
                  Scholar in Ayesa
                </p>
              </li>
              <li>
                <p className="text-sm">Marzo.24-Junio.24</p>
              </li>
            </ul>
          </div>
        </div>
      </article>
      <article className="flex justify-evenly w-full md:w-4/12 h-40 group rounded-lg bg-green-500">
        <div className="flex flex-col">
          <h2 className="text-xl text-center font-bold text-white">
            Education
          </h2>
          <ul className="p-2 ps-3 md:p-1 lg:ps-3 mt-1 *:text-left">
            <li className="text-pretty text-xl md:text-lg lg:text-xl">
              <p>Grado Superior en Desarrollo de Aplicaciones Web (DAW)</p>
            </li>
            <li className="text-lg md:text-sm lg:text-lg">
              <p>Centro ILERNA-SEVILLA</p>
            </li>
            <li className="text-base md:text-sm lg:text-base">
              <p>2022-2024</p>
            </li>
          </ul>
        </div>
      </article>
      {/* <p>frontend: React figma tailwind</p>
      <p>backend: express mongoDB</p>
      <h3>Otra tecnologias que he utilizado</h3>
      <p>python,php,laravel,sass,figma,</p>
      <p>docker,Sql,Redis,Socket.io(WebSockets),java,nodejs,git/github</p> */}
    </div>
  );
};
export default Skills;
