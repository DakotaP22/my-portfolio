import { NextPage } from "next";
import { useEffect, useState } from "react";
import classes from "./type-animation.module.css";

interface props {
  words: string[];
  pauseFrames: number;
  interval: number;
}

const TypeAnimation: NextPage<props> = ({ words, pauseFrames, interval }) => {
  // state
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  // shorthand vars
  const word = words[wordIndex];
  const wordCount = words.length;
  const wrapPoint = word.length * 2 + (pauseFrames - 1);
  // styles
  const cursorStyle = `${classes.cursor} after:bg-black dark:after:bg-white`;
  const blinkingCursorStyle = `${cursorStyle} ${classes.animated}`;
  

  // state machine for updating animated text on an interval
  useEffect(() => {
    const timer = setTimeout(() => {
      if (letterIndex + 1 >= wrapPoint) {
        setWordIndex(curr => (curr+1)%wordCount);
        setLetterIndex(curr => 0);
      } else {
        setLetterIndex(curr => curr + 1);
      }
    }, interval);
    return () => clearTimeout(timer);
  }, [letterIndex, word, wordCount, pauseFrames, interval, wrapPoint]);


  // View code
  // if we are on pause frames (after word finished typing, but before delete)
  if (letterIndex >= word.length && letterIndex < (word.length + pauseFrames - 1))
    return <span className={blinkingCursorStyle}>{word}</span>;
  
  // if we are typing a word or deleting a word
  var innerText;
  if(letterIndex == 0) innerText = "";
  else if(letterIndex < word.length) innerText = word.substring(0, letterIndex);
  else innerText = word.substring(0, word.length * 2 + (pauseFrames - 1) - letterIndex);

  return <span className={cursorStyle}>{innerText}</span>;
  
    
};

export default TypeAnimation;
