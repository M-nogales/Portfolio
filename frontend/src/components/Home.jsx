import MyImage from "../assets/manu.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={MyImage}
        alt="Literally me"
        className="w-32 h-32 md:w-60 md:h-60 ring-4 border-emerald-400 rounded-full"
      />
      <h1 className="text-xl text-wrap font-semibold mx-8 md:text-2xl ">Hi!, I`m M-nogales! and I`m...</h1>
      <p className="mx-8">
        FULL STACK DEVELOPER+ICN,MANCHEGO+LnkMAPS,RACOON LOVER+img
      </p>
      <a className="p-4 rounded-lg bg-blue-600">CV+icnDOWN</a>
      SOCIAL MEDIA
    </div>
  );
};
export default Home;
