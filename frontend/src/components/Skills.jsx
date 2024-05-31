import { ExpressIcon } from "../assets/icons/ExpressIcon"
import { GithubIcon } from "../assets/icons/GithubIcon"
import { JavaScriptIcon } from "../assets/icons/JavaScriptIcon"
import { MongoDBIcon } from "../assets/icons/MongoDBIcon"
import { ReactIcon } from "../assets/icons/ReactIcon"
import { TailwindCSSIcon } from "../assets/icons/TailwindCSSIcon"

const skills = () => {
  return (
    <div>
      skills
      <h3>Main Stack</h3>
      <div className="grid grid-rows-2 grid-flow-col bg-lime-500">
        <div className="h-30 text-center text-white rounded-lg bg-red-500 flex flex-row">Frontend<GithubIcon/><ReactIcon/><TailwindCSSIcon/></div>
        <div className="h-30 text-center text-white rounded-lg bg-emerald-500 flex flex-row">Backend<JavaScriptIcon/><ExpressIcon/><MongoDBIcon/></div>
        <div className="h-40 text-center text-white rounded-lg bg-orange-500 flex flex-row grid-rows-subgrid row-span-2"><ReactIcon/><ReactIcon/><ReactIcon/><ReactIcon/><ReactIcon/><ReactIcon/><ReactIcon/><ReactIcon/><ReactIcon/><ReactIcon/><ReactIcon/></div>
      </div>

      {/* <p>frontend: React figma tailwind</p>
      <p>backend: express mongoDB</p>
      <h3>Otra tecnologias que he utilizado</h3>
      <p>python,php,laravel,sass,css,html,</p>
      <p>docker,Sql,Redis,Socket.io(WebSockets),java,nodejs,git/github</p> */}
      
    </div>
  )
}
export default skills