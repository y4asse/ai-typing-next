import { clearScore } from "@/redux/features/Scores";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";


const score = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const score = useAppSelector((state) => state.score.value);
  return (
    <div className="container">
      <div>
        <h1>終了！</h1>
      </div>
      <div className="scoreModal">
        <span className="score">スコア： {score}</span>
      </div>
      <div className="buttonContainer">
        <button
          className="button small"
          onClick={() => router.push(`/difficulty`)}
        >
          もう一度
        </button>
        <button
          className="button small"
          onClick={() => {
            router.push("/");
          }}
        >
          タイトルへ戻る
        </button>
      </div>
    </div>
  );
};

export default score;
