import { NextPage } from "next";
import Link from "next/link";
import { createElement } from "react";
import { IconType } from "react-icons";
import { Url } from "url";

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
        {createElement(icon, { className: iconClass })}
      </Link>
    </span>
  );
};

export default NavIcon;
