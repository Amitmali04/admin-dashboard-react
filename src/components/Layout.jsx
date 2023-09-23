import React from "react";
import { navigations } from "../Navigations";
import { CustomSideBar } from "./Sidebar";
import { MainContent } from "./CustomComponents";

const Layout = ({ children }) => {
  return (
    <div>
      <CustomSideBar navigations={navigations} />
      <MainContent>{children}</MainContent>
    </div>
  );
};

export default Layout;
