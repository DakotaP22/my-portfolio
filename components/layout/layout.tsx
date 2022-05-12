import { NextPage } from "next";
import { ReactNode } from "react";
import Footer from "./footer";
import Sidebar from "./sidebar/sidebar";

const Layout: NextPage<{ children: ReactNode; theme?: string }> = ({ children, theme }) => {

  return (
    <div className={(theme ?? "") + " h-full grid grid-cols-[min-content_1fr] grid-rows-[1fr_min-content]"}>
      <Sidebar />
      <div className="overflow-auto bg-white dark:bg-dark_primary-300 text-white py-2">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
