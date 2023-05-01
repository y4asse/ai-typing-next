import { GetStaticPaths } from "next";
import { useRouter } from "next/router";
import React, { Dispatch, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Start = ({setGameStart}: {setGameStart: Dispatch<boolean>}) => {
  const text = "生成が完了しました．ゲームを開始します.".split("");
  const [timer, setTimer] = useState(3);
  const [typingTimer, setTypingTimer] = useState(0);
  const [isCountStart, setIsCountStart] = useState(false);

  const router = useRouter();
  useEffect(() => {
    let c = 0;
    const typingCount = setInterval(() => {
      if (c > text.length) {
        clearInterval(typingCount);
        setIsCountStart(true);
        return;
      }
      setTypingTimer((prev) => prev + 1);
      c++;
    }, 50);

    const count = setInterval(() => {
      if (c > text.length) {
        setTimer((prev) => {
          if (prev < 1) {
            setGameStart(true);
            return prev;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => {
      clearInterval(count);
      clearInterval(typingCount);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="completeText">
          <h3>
            {text.map((word, index) => {
              if (index <= typingTimer) {
                return <span key={index}>{word}</span>;
              }
              return "";
            })}
          </h3>
          {isCountStart && (
            <CountDiv>
              <CountSpan>{timer === 0 ? "スタート!" : timer}</CountSpan>
            </CountDiv>
          )}
        </div>
      </div>
    </>
  );
};

export default Start;

const rotate = keyframes`
  0%{
    transform: rotateY(0);
    opacity: 0;
  }
  10%{
    transform: rotateY(0);
    opacity: 1;
  }
  90%{
    transform: rotateY(0deg);
    opacity: 1;
  }
  100%{
    transform: rotateY(180deg);
    opacity: 0;
  }
`;

export const CountSpan = styled.h1`
  font-size: 100px;
  padding: 50px;
  animation: ${rotate} 1s infinite;
`;

export const CountDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
