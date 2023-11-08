import React, { FC, createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface Opts {
  openModal?: (Modal: FC<any>, props?: Record<string, any>) => void;
  isOpenModal?: boolean;
  closeModal?: () => void;
}

export const context = createContext<Opts>({});



const DialogProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const modalRef = useRef(null);

  const openModal = (Modal, props) => {
    modalRef.current = <Modal {...props} />;
    setIsOpenModal(true);
  };

  const closeModal = useCallback(() => {
    modalRef.current = null;
    setIsOpenModal(false);
  }, []);


  return (
    <context.Provider value={{ openModal, closeModal, isOpenModal }}>
      {isOpenModal && createPortal(modalRef.current, document.body)}
      {children}
    </context.Provider>
  );
};

export default DialogProvider;