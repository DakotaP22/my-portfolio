import HtmlTag from "../components/html-tag";
import LineCountBar from "../components/line-count-bar";
import TypeAnimation from "../components/type-animation";

export default function Home() {
  const lines = Array.from(Array(12).keys()).map((line) => {
    return (
      <p key={line} className="ml-3 mr-5 text-right text-dark_primary-50">
        {line + 1}
      </p>
    );
  });

  return (
    <div className="w-full h-full flex">
      <LineCountBar lines={15} />
      <div>
        <br />
        <HtmlTag tag="h1">Dakota Pease</HtmlTag>
        <HtmlTag tag="h3">Full Stack Web Developer</HtmlTag>
        <br />
        <HtmlTag tag="p">Welcome to my Porfolio!</HtmlTag>
        <HtmlTag tag="p">
          I am a full stack web developer with experience working in&nbsp;
          <TypeAnimation words={["Angular", "React", "Next.js", "Node.js"]} pauseFrames={15} interval={100}></TypeAnimation>
        </HtmlTag>
        <HtmlTag multiline tag="p">
          I am passionate about creating highly performant web applications with a focus on quick <br /> render times and minimal blocking in the user
          experience.
        </HtmlTag>
        <br />
        <br />
        <HtmlTag tag="q">Never code in light mode. The light attracts bugs!</HtmlTag>
      </div>
    </div>
  );
}
