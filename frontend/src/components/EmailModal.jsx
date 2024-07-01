import { useState } from "react";
import { XMark } from "../assets/icons/Utilities";

/* eslint-disable react/prop-types */
// show bolean shows or not modal, onClose function changes show State
export const EmailModal = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    message: "",
  });
  // if (!show) return null; if i wanted to delete   "show && ("

  //every time anything change in the inputs we let formData equeal than before except the array position that we want to change and his value
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
    console.log("handle submit clicked, " + JSON.stringify(formData));

    setFormData({
      fullName: "",
      subject: "",
      message: "",
    });
    onClose();
  };
  //   para hacer close bien añadir required en casode que alguno de los valores esté vacio si no close, max Message/subject/full Name
  return (
    show && (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white dark:bg-black p-4 pt-2 grid rounded-lg w-1/2">
          <button className="py-2 rounded place-self-end" onClick={onClose}>
            <XMark className={"w-6 h-6 fill-black"} />
          </button>
          <form onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="fullName"
                id="floatingFullName"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={handleOnChange}
                value={formData.fullName}
              />
              <label
                htmlFor="floatingFullName"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Full Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="subject"
                id="floatingSubject"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={handleOnChange}
                value={formData.subject}
              />
              <label
                htmlFor="floatingSubject"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Subject
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <textarea
                name="message"
                id="message"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={handleOnChange}
                value={formData.message}
              />
              <label
                htmlFor="message"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label>
            </div>
            <div className="w-full mt-16 flex justify-center">
              <button
                className="ring-2 ring-blue-500 text-white px-4 py-2 rounded w-1/2"
              >
                Submit
              </button>
              <button className="mx-2 py-2 px-4 hover:underline underline-offset-3 decoration-2 decoration-red-400 text-red-400 w-1/2"
              onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};
