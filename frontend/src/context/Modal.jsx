import { createContext, useState } from 'react';

// create Context
export const ModalContext = createContext();

// provide context
export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <ModalContext.Provider value={{ showModal, handleModal, handleCloseModal }}>
      {children}
    </ModalContext.Provider>
  );
};
