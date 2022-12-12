import Link from "next/link";
import { createElement } from "react";
import { IconType } from "react-icons";

interface props {
  icon: IconType;
  href: string;
}

export default function NavIcon({ icon, href }: props) {
  const iconClass: string = "text-4xl cursor-pointer hover:text-[#FFF] text-[#8C8C8C]";
  const center = "grid place-content-center";

  return (
    <span className={center}>
      <Link href={href} passHref>
        <span>{createElement(icon, { className: iconClass })}</span>
      </Link>
    </span>
  );
}
