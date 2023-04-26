import { showPrivacyModal } from "@/redux/features/Modal";
import { useAppDispatch } from "@/redux/hooks";
import React from "react";

const Footer = () => {
  const dispatch = useAppDispatch();
  return (
    <footer>
      <span>2023</span>
      <a
        href="https://twitter.com/y4isse"
        target="_blank"
        rel="noopener noreferrer"
      >
        y4isse
      </a>
      <span style={{ cursor: "pointer" }} onClick={() => dispatch(showPrivacyModal())}>プライバシーポリシー</span>
    </footer>
  );
};

export default Footer;
