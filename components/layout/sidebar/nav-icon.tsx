import { NextPage } from "next";
import Link from "next/link";
import { createElement } from "react";
import { IconType } from "react-icons";

interface props {
  icon: IconType;
  href: string;
}

const NavIcon: NextPage<props> = ({ icon, href }) => {
  const iconClass: string = "text-3xl cursor-pointer hover:text-white text-dark-primary-50 ";
  const center = "grid place-content-center";

  return (
    <span className={center}>
      <Link href={href} passHref>
        <span>{createElement(icon, { className: iconClass })}</span>
      </Link>
    </span>
  );
};

export default NavIcon;
