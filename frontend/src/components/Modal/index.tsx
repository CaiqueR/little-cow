/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from "react";
import ReactModal from "react-modal";

interface Props {
  title: string;
  body: (close: () => void) => React.ReactNode;
}
const Modal: React.FC<Props> = ({ children, title, body }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);
  const showModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const toggleModal = useCallback(() => {
    setIsOpen((open) => !open);
  }, []);

  return (
    <>
      <ReactModal
        // @ts-ignore
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 500 }}>{title}</h1>

          {body(closeModal)}
        </div>
      </ReactModal>
      <div onClick={showModal}>{children}</div>
    </>
  );
};

export default Modal;
