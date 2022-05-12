import { NextPage } from "next";
import Link from "next/link";
import { useContext, useState } from "react";
import { VscGithubInverted, VscAccount, VscFiles, VscHome, VscSettingsGear } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import ThemeContext from "../../../contexts/ThemeContext";
import NavIcon from "./nav-icon";
import ActionIcon from "./action-icon";

const Sidebar: NextPage = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = () => setOpen(!open);
  const openGithub = () => window.open("https://github.com/DakotaP22", "_blank");
  const toggleTheme = () => setTheme(theme == "light" ? "dark" : "light");

  return (
    <div className="flex w-fit h-full">
      {/*SIDEBAR*/}
      <div className={"w-11 h-full bg-dark-primary-100 py-3 grid grid-cols-1 grid-rows-[repeat(5,_50px)_1fr_50px] gap-3"}>
        <NavIcon icon={VscHome} href="/" />
        <ActionIcon icon={VscFiles} onClick={toggleDrawer} />
        <ActionIcon icon={VscGithubInverted} onClick={openGithub} />
        <NavIcon icon={FaReact} href="/technologies" />
        <NavIcon icon={VscAccount} href="/about" />
        <span />
        <ActionIcon icon={VscSettingsGear} onClick={toggleTheme} />
      </div>

      {/*DRAWER*/}
      <div
        className={
          (open ? "w-72 px-1 " : "w-0 px-0 ") +
          "pt-1 h-full transition-width duration-[50ms] " +
          "overflow-hidden " +
          "bg-light-background-100 dark:bg-dark-primary-200"
        }
      >
        <p className="text-dark_primary-50 text-xs whitespace-nowrap">Explorer: My-Projects</p>
      </div>
    </div>
  );
};

export default Sidebar;
