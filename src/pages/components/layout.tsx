import { FC, ReactNode } from "react";
import Footer from "./footer";
import PrivacyModal from "./modals/privacyModal";
import ErrorModal from "./modals/errorModal";
import { useAppSelector } from "@/redux/hooks";

const Layout:FC<{children: ReactNode}> = ({ children }) => {
  const privacyModalOpen = useAppSelector((state) => state.modal.privacy);
  const errorModalOpen = useAppSelector((state) => state.modal.error);
  return (
    <>
      {privacyModalOpen && <PrivacyModal />}
      {errorModalOpen && <ErrorModal />}
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;