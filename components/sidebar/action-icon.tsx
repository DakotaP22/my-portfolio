import { createElement } from "react";
import { IconType } from "react-icons";

interface props {
  icon: IconType;
  onClick: () => any;
}

export default function ActionIcon({ icon, onClick }: props) {
  const iconClass: string = "text-4xl cursor-pointer hover:text-[#fff] text-[#8C8C8C] ";
  const center = "grid place-content-center";
  const iconElement = createElement(icon, { className: iconClass, onClick: onClick });

  return <span className={center}>{iconElement}</span>;
}
