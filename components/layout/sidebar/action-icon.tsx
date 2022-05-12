import { NextPage } from "next";
import { createElement } from "react";
import { IconType } from "react-icons";

interface props {
  icon: IconType;
  onClick: () => any;
}

const ActionIcon: NextPage<props> = ({ icon, onClick }) => {
  const iconClass: string = "text-3xl cursor-pointer hover:text-white text-dark-primary-50 ";
  const center = "grid place-content-center";
  const iconElement = createElement(icon, { className: iconClass, onClick: onClick });

  return <span className={center}>{iconElement}</span>;
};

export default ActionIcon;
