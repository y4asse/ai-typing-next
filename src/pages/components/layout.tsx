import { FC, ReactNode } from "react";
import Footer from "./footer";
import PrivacyModal from "./modals/privacyModal";
import { useAppSelector } from "@/redux/hooks";

const Layout:FC<{children: ReactNode}> = ({ children }) => {
  const privacyModalOpen = useAppSelector((state) => state.modal.privacy);
  return (
    <>
      {privacyModalOpen && <PrivacyModal />}
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;