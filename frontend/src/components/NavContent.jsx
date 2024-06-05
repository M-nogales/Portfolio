/* eslint-disable react/prop-types */
const NavContent = ({content}) => {
  // nombre del data no del object
  console.log(content);
  return (
    <>
      {content.text.map((text, index) => (
        <a 
          key={index} 
          href={content.link[index]} 
          className='text-textForeground font-bold sm:hover:underline text-center w-full md:w-auto p-2 hover:bg-white rounded-lg md:hover:bg-transparent'
        >
          {text}
        </a>
      ))}
    <button className="font-bold text-white bg-red-500 hover:bg-red-700 transition p-1.5 rounded-lg"> Contact </button>
    </>
  )
}

export default NavContent