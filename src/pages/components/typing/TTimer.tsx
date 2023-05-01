import {
  addCurrentTextIndex,
  clearTimer,
  setCurrentCharIndex,
  setCurrentTextIndex,
  subTimer,
} from "@/redux/features/Game";
import { subScore } from "@/redux/features/Scores";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const TTimer = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const timer = useAppSelector((state) => state.game.timer);
  const english = useAppSelector((state) => state.game.english);
  const currentCharIndex = useAppSelector(
    (state) => state.game.currentCharIndex
  );
  const currentTextIndex = useAppSelector(
    (state) => state.game.currentTextIndex
  );

  useEffect(() => {
    dispatch(clearTimer());
  }, [currentTextIndex]);

  useEffect(() => {
    const count = setInterval(() => {
      if (timer <= 1) {
        dispatch(subScore(100));
        if (currentTextIndex >= english.length - 1) {
          router.push("/score");
        } else {
          dispatch(addCurrentTextIndex(1));
        }
      } else {
        dispatch(subTimer());
      }
    }, 1000);
    return () => {
      clearInterval(count);
    };
  }, [timer, currentTextIndex]);


  return (
    <div className="gameTimer">
      <div className="gameTimerInner">
        <span>{timer}</span>
      </div>
    </div>
  );
};

export default TTimer;
