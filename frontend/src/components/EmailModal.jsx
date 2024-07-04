import { useContext, useState } from "react";
import { XMark } from "../assets/icons/Utilities";
import { ModalContext } from "../context/Modal";

/* eslint-disable react/prop-types */
// showModal bolean showModal or not modal, handleCloseModal function changes showModal State
export const EmailModal = () => {
  const { showModal, handleCloseModal } = useContext(ModalContext);
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    message: "",
  });
  // if (!showModal) return null; if i wanted to delete   "showModal && ("

  // every time anything change in the inputs we let formData equeal than before except the array position that we want to change and his value
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, subject, message } = formData;
    const mailtoLink = `mailto:manuelnogalesserrano5221@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}%0A%0ADe: ${fullName}`;
    window.location.href = mailtoLink;

    setFormData({
      fullName: "",
      subject: "",
      message: "",
    });
    handleCloseModal();
  };
  // todo add required in case any value is wrong, Message/subject/full Name
  return (
    showModal && (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white dark:bg-slate-900 p-4 pt-2 grid rounded-lg w-1/2">
          <button className="py-2 rounded place-self-end" onClick={handleCloseModal}>
            <XMark className={"w-6 h-6 text-black dark:text-white"} />
          </button>
          <form onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="fullName"
                id="floatingFullName"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
                placeholder=" "
                required
                onChange={handleOnChange}
                value={formData.fullName}
              />
              <label
                htmlFor="floatingFullName"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Full Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="subject"
                id="floatingSubject"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
                placeholder=" "
                required
                onChange={handleOnChange}
                value={formData.subject}
              />
              <label
                htmlFor="floatingSubject"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Subject
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <textarea
                name="message"
                id="message"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
                placeholder=" "
                required
                onChange={handleOnChange}
                value={formData.message}
              />
              <label
                htmlFor="message"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label>
            </div>
            <div className="w-full mt-16 flex justify-center">
              <button
                className="ring-2 ring-primary-400 hover:bg-primary-400 dark:ring-primary-500 dark:hover:bg-primary-500 text-textForeground hover:text-white px-4 py-2 rounded w-1/2"
              >
                Submit
              </button>
              <button className="mx-2 py-2 px-4 hover:underline underline-offset-3 decoration-2 decoration-red-600 text-red-600 w-1/2"
              onClick={handleCloseModal}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};
