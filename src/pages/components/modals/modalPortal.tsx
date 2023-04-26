import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

const ModalPortal: FC<{children: ReactNode}> = ({ children }) => {
  const target = document.querySelector(".container") as HTMLElement;
  return createPortal(children, target);
};

export default ModalPortal;