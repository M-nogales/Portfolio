import { useContext } from "react";
import { ModalContext } from "../context/Modal";
/* eslint-disable react/prop-types */
const NavContent = ({content}) => {
  // Hook para usar el contexto
  const { handleModal } = useContext(ModalContext);
    return (
    <>
      {content.text.map((text, index) => (
        <a 
          key={index} 
          href={content.link[index]} 
          className='text-textForeground hover:text-primary-700 text-lg font-bold dark:hover:text-primary-300 text-center p-2 rounded-lg'
        >
          {text}
        </a>
      ))}
    <button className="font-bold text-accentColor hover:text-primary-700 dark:hover:text-primary-300 transition p-1.5 rounded-lg" onClick={handleModal}>Contact</button>
    </>
  )
}

export default NavContent