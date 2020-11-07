import React from "react";
import { useGeneral } from "../context/Provider";

import { Container } from "./styles";

interface Props {
  title: string;
  trigger: React.ReactNode;
}
const Modal: React.FC<Props> = ({ children, trigger, title }) => {
  const { setShowDialog } = useGeneral();

  return (
    <div
      onClick={() => setShowDialog({ show: true, content: children, title })}
    >
      {trigger}
    </div>
  );
};

export default Modal;
