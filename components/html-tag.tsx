import { NextPage } from "next";
import { ReactNode } from "react";

const HtmlTag: NextPage<{ children: string | ReactNode; tag: string, multiline?: boolean }> = ({
  children,
  tag,
  multiline
}) => {
  if (multiline) {
    return (
      <>
        <p className="text-base mx-0 text-light-html_tag dark:text-dark-html_tag">
          &lt;{tag}&gt;
        </p>
        <p className="text-base mx-0 ml-5 text-light-html_text dark:text-dark-html_text">{children}</p>
        <p className="text-base mx-0 text-light-html_tag dark:text-dark-html_tag">
          &lt;/{tag}&gt;
        </p>
      </>
    );
  } else {
    return (
      <p className="text-base mx-0">
        <span className="text-light-html_tag dark:text-dark-html_tag">
          &lt;
        </span>
        <span className="text-light-html_tag dark:text-dark-html_tag">
          {tag}
        </span>
        <span className="text-light-html_tag dark:text-dark-html_tag">
          &gt;
        </span>
        <span className="text-light-html_text dark:text-dark-html_text">
          {children}
        </span>
        <span className="text-light-html_tag dark:text-dark-html_tag">
          &lt;/
        </span>
        <span className="text-light-html_tag dark:text-dark-html_tag">
          {tag}
        </span>
        <span className="text-light-html_tag dark:text-dark-html_tag">
          &gt;
        </span>
      </p>
    );
  }
};

export default HtmlTag;
