import { NextPage } from "next";
import { useEffect, useState } from "react";
import classes from "./type-animation.module.css";

const TypeAnimation: NextPage<{
  words: string[];
  pauseFrames: number;
  interval: number;
}> = ({ words, pauseFrames, interval }) => {
  const [state, setState] = useState({
    word: 0,
    index: 0,
  });
  const word = words[state.word];
  const wordCount = words.length;
  useEffect(() => {
    const timer = setTimeout(() => {
      if (state.index + 1 >= word.length * 2 + (pauseFrames - 1)) {
        setState({ word: (state.word + 1) % wordCount, index: 0 });
      } else {
        setState({ word: state.word, index: state.index + 1 });
      }
    }, interval);
    return () => clearTimeout(timer);
  }, [state, word, wordCount, pauseFrames, interval]);

  if (state.index == 0) {
    return (
      <span className={classes.cursor + " after:bg-black dark:after:bg-white"}>
        {" "}
      </span>
    );
  } else if (state.index < word.length) {
    return (
      <span className={classes.cursor + " after:bg-black dark:after:bg-white"}>
        {word.substring(0, state.index)}
      </span>
    );
  } else if (state.index < word.length + pauseFrames - 1) {
    return (
      <span
        className={
          classes.cursor +
          " " +
          classes.animated +
          " after:bg-black dark:after:bg-white"
        }
      >
        {word}
      </span>
    );
  } else {
    return (
      <span className={classes.cursor + " after:bg-black dark:after:bg-white"}>
        {word.substring(0, word.length * 2 + (pauseFrames - 1) - state.index)}
      </span>
    );
  }
};

export default TypeAnimation;
