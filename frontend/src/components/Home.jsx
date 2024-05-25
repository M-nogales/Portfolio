import MyImage from "../assets/manu.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">

      <img src={MyImage} alt="Literally me" className='w-40 h-40 ring-4 border-emerald-400 rounded-full' />
      <p>
        Hola Hola Hola Hola Hola Hola Hola Hola Hola Hola
      </p>

    </div>
  )
}
export default Home