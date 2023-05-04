import React, { ReactNode } from "react";
import { isMobile } from "react-device-detect";

const Identify: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      {isMobile ? (
        <div>
          <p>こちらのサイトはpcのみ対応しております.</p>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
};

export default Identify;
