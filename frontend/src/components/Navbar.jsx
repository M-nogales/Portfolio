import { useState } from "react";

import { HamburguerMenu, XMark } from "../assets/icons/Utilities";

import NavContent from "./NavContent.jsx";
const Navbar = () => {
  const content = {
    text: ["Home", "About me", "Experience", "Projects"],
    link: ["#Home","#About_Me","#Experience","#Projects"],
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
    console.log("closed modal");
  };
  return (
    <header className="w-full mt-1 mb-9 bg-transparent flex items-center justify-end sm:justify-center">
      <nav className="hidden sm:block"><NavContent content={content} /></nav>
      {/* <!-- Mobile menu button--> */}
      <button
      aria-label="open navigation"
        type="button"
        className="sm:hidden relative inline-flex items-center justify-center rounded-md p-4 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        onClick={closeModal}
      >
        {/* Hamburguer icon or Xmark with click */}
        {!isModalOpen ? <HamburguerMenu className={"w-8 h-8"}/> : <XMark className={"w-8 h-8"}/>}
      </button>
      {isModalOpen && (
        <div
          className="fixed z-10 inset-0 overflow-y-auto w-full h-full "
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          {/* <!-- Modal content --> */}
          <div className="relative w-full h-full bg-white shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 dark:border-gray-600">
              <button
               aria-label="open navigation"
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-md text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
                onClick={() => setIsModalOpen(false)}
              >
                <XMark />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-4 flex flex-col items-center">
              <NavContent content={content} closeModal={closeModal}/>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;