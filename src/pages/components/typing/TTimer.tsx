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
import styled, { keyframes } from "styled-components";
import { rotate } from "../start";

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
          dispatch(setCurrentCharIndex(0));
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
      <GameTimerInnner key={currentTextIndex}>
        <Count key={currentTextIndex}>{timer}</Count>
      </GameTimerInnner>
    </div>
  );
};

export default TTimer;

const countdownAnimation = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
`;

const GameTimerInnner = styled.div`
  height: 100%;
  border-radius: 10px;
  background-color: royalblue;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${countdownAnimation} 10s linear infinite;
`;

const Count = styled.span`
  animation: ${rotate} 1s infinite;
  position: absolute;
  top: 0;
  left: 49%;
`;
