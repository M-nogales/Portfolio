import { useState } from "react";
import { EmailModal } from "./EmailModal";
/* eslint-disable react/prop-types */
const NavContent = ({content}) => {
  const [showModal,setShowModal] = useState (false);
  // can be done with useContext too but in this case this is easier to use/read
  const handleModal = () => {
    setShowModal(!showModal)
  }

  const handleCloseModal = () => {
    setShowModal(!showModal);
  };
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
    <button className="font-bold text-white ring-2 ring-red-500 hover:bg-red-500 transition p-1.5 rounded-lg" onClick={handleModal}> Contact </button>
    <EmailModal show={showModal} onClose={handleCloseModal}></EmailModal>

    </>
  )
}

export default NavContent