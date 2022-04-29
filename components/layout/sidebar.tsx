import { NextPage } from "next"
import Link from "next/link";
import { useContext, useState } from "react";
import { VscGithubInverted, VscAccount, VscFiles, VscHome, VscSettingsGear } from 'react-icons/vsc';
import { FaReact } from 'react-icons/fa';
import ThemeContext from "../../contexts/ThemeContext";

const Sidebar: NextPage = () => {
  const {theme, setTheme} = useContext(ThemeContext)
  const [open, setOpen] = useState<boolean>(false);
  const iconClass: string = "text-3xl cursor-pointer hover:text-white text-dark-primary-50 " 
    ;
  return (
    <>
      {/*SIDEBAR*/}
      <div
        className={
          "w-11 h-full flex flex-col gap-5 py-3 bg-dark-primary-100"
        }
      >
        <span className="grid place-content-center">
          <Link href="/" passHref>
            <a>
              <VscHome className={iconClass} />
            </a>
          </Link>
        </span>
        <span className="grid place-content-center">
          <VscFiles className={iconClass} onClick={() => setOpen(!open)} />
        </span>
        <span className="grid place-content-center">
          <a
            href="https://github.com/DakotaP22"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithubInverted className={iconClass} />
          </a>
        </span>
        <span className="grid place-content-center">
          <Link href="/technologies" passHref>
            <a>
              <FaReact className={iconClass} />
            </a>
          </Link>
        </span>
        <span className="grid place-content-center">
          <Link href="/about" passHref>
            <a>
              <VscAccount className={iconClass} />
            </a>
          </Link>
        </span>
        <span className="flex-grow"></span>
        <span className="grid place-content-center">
          <VscSettingsGear
            className={iconClass}
            onClick={() => setTheme(theme == "light" ? "dark" : "light")}
          />
        </span>
      </div>

      {/*DRAWER*/}
      <div
        className={
          (open ? "w-72 p-1 " : "w-0 px-0 ") +
          "h-full transition-width duration-[50ms] " +
          "bg-light-background-100 " +
          "dark:bg-dark-primary-200"
        }
      >
        <p className="text-dark_primary-50 text-xs">Explorer: My-Projects</p>
      </div>
    </>
  );
}

export default Sidebar