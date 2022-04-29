import { NextPage } from "next";
import { ReactNode } from "react";
import Sidebar from "./sidebar";

const Layout: NextPage<{children: ReactNode, theme?: string}> = ({children, theme}) => {
  return (
    <div className={
      "flex flex-col w-full h-full " +
      theme ?? ''     
      }>
      <div className="flex flex-grow">
        <Sidebar></Sidebar>
        <div className="flex-grow bg-white dark:bg-dark_primary-300 text-white py-2">
          {children}
        </div>
      </div>
      <div className="flex justify-end bg-dark_blue text-white gap-5 pr-5 h-4">
        <p className="text-[.6rem]">Next.js</p>
        <p className="text-[.6rem]">Vercel</p>
      </div>
    </div>
  );
      
}

export default Layout;
