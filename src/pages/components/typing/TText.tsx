import {
  clearTimer,
  setCurrentCharIndex,
  setCurrentTextIndex,
} from "@/redux/features/Game";
import { addScore, subScore } from "@/redux/features/Scores";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const TText = ({ difficulty }: { difficulty: string }) => {
  const currentCharIndex = useAppSelector(
    (state) => state.game.currentCharIndex
  );
  const currentTextIndex = useAppSelector(
    (state) => state.game.currentTextIndex
  );
  const english = useAppSelector((state) => state.game.english);
  const japanese = useAppSelector((state) => state.game.japanese);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [inputArray, setInputArray] = useState<string[]>([]);

  const splitEnglish = english[currentTextIndex].split("");

  const handleInput = (e: KeyboardEvent) => {
    setInputArray((prev) => {
      return [...prev, e.key];
    });
  };

  useEffect(() => {
    if (splitEnglish[currentCharIndex] === " ") {
      dispatch(setCurrentCharIndex(currentCharIndex + 1));
    }
  }, [currentCharIndex]);

  useEffect(() => {
    setInputArray([]);
  }, [currentTextIndex]);

  useEffect(() => {
    document.addEventListener("keydown", handleInput, false);

    return () => {
      document.removeEventListener("keydown", handleInput, false);
    };
  }, []);

  useEffect(() => {
    const currentText = english[currentTextIndex];
    const currentChar = currentText.split("")[currentCharIndex];
    if (inputArray[inputArray.length - 1]) {
      switch (inputArray[inputArray.length - 1]) {
        case "Shift":
          break;
        case currentChar:
          if (currentCharIndex === splitEnglish.length - 1) {
            dispatch(
              addScore(10 * currentText.replace(/\s/g, "").split("").length)
            );
            if (currentTextIndex === english.length - 1) {
              router.push(`/score`);
            } else {
              dispatch(clearTimer());
              dispatch(setCurrentTextIndex(currentTextIndex + 1));
              dispatch(setCurrentCharIndex(0));
            }
          } else {
            dispatch(setCurrentCharIndex(currentCharIndex + 1));
          }
          break;
        default:
          dispatch(subScore(10));
          break;
      }
    }
  }, [inputArray]);

  return (
    <div className="gameText">
      <div className="gameTexts">
        <div className="english">
          {splitEnglish.map((char, index) => (
            <div
              key={index}
              style={{
                fontSize: "30px",
                color: index < currentCharIndex ? "gray" : "white",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </div>
          ))}
        </div>
        <div className="japanese">
          <span>{japanese[currentTextIndex]}</span>
        </div>
      </div>
    </div>
  );
};

export default TText;
