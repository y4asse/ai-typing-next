import { FC, ReactNode } from "react";
import Footer from "./footer";

const Layout:FC<{children: ReactNode}> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;