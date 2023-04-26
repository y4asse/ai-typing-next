import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
interface DifProps {
  difficulty: "easy" | "normal" | "hard";
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { difficulty: "easy" } },
      { params: { difficulty: "normal" } },
      { params: { difficulty: "hard" } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<DifProps> = async ({ params }) => {
  return {
    props: { difficulty: params?.difficulty as DifProps["difficulty"] },
  };
};

const game = ({ difficulty }: DifProps) => {
  return (
    <div className="container">
      <div className="gameGrid">
        <div className="gameTitle">
          <h2>
            {difficulty === "easy"
              ? "簡単"
              : difficulty === "normal"
              ? "普通"
              : difficulty == "hard"
              ? "難しい"
              : "error"}
          </h2>
        </div>
        <div className="gameScore">
          <span>スコア： 30</span>
        </div>
        <div className="gameText">
          <div className="gameTexts">
            <div className="english">
              <span className="word">hellohello</span>
              <span>hellohello</span>
              <span>hellohello</span>
              <span>hellohello</span>
              <span>hellohello</span>
            </div>
            <div className="japanese">
              <span>にちはこんにちはこんにちはこんにちは</span>
            </div>
          </div>
        </div>
        <div className="gameTimer">
          <div className="gameTimerInner">
            <span>10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default game;
