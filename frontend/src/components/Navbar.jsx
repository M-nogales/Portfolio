import { useState } from "react";
import { HamburguerMenu } from "../assets/icons/HamburguerMenu.jsx";
import { XMark } from "../assets/icons/XMark.jsx";

import NavContent from "./NavContent.jsx";
const Navbar = () => {
  const content = {
    text: ["Home", "Skills", "Projects", "About me"],
    link: ["google.com"],
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log("modal" + isModalOpen);
  console.log("content nav" + JSON.stringify(content));
  return (
    <header className="w-full h-16 bg-primary-950 mb-9 flex items-center justify-end md:justify-evenly">
      <div className="hidden sm:block"><NavContent content={content}></NavContent></div>
      {/* <!-- Mobile menu button--> */}
      <button
        type="button"
        className="sm:hidden relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        {/* Hamburguer icon or Xmark with click */}
        {!isModalOpen ? <HamburguerMenu /> : <XMark />}
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
              <NavContent content={content}></NavContent>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
