import { NextPage } from "next";
import { ReactNode } from "react";

interface props {
  children: string | ReactNode;
  tag: string;
  multiline?: boolean;
}

const HtmlTag: NextPage<props> = ({ children, tag, multiline }) => {
  const tagColors = "text-light-html_tag dark:text-dark-html_tag";
  const textColors = "text-light-html_text dark:text-dark-html_text";

  return multiline ? (
    <>
      <p className={"text-base mx-0 " + tagColors}>&lt;{tag}&gt;</p>
      <p className={"text-base mx-0 ml-5 " + textColors}>{children}</p>
      <p className={"text-base mx-0 " + tagColors}>&lt;/{tag}&gt;</p>
    </>
  ) : (
    <p className="text-base mx-0">
      <span className={tagColors}>&lt;</span>
      <span className={tagColors}>{tag}</span>
      <span className={tagColors}>&gt;</span>
      <span className={textColors}>{children}</span>
      <span className={tagColors}>&lt;/</span>
      <span className={tagColors}>{tag}</span>
      <span className={tagColors}>&gt;</span>
    </p>
  );
};

export default HtmlTag;
