import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
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

const score = ({ difficulty }: DifProps) => {
  const router = useRouter();
  return (
    <div className="container">
      <div>
        <h1>終了！</h1>
      </div>
      <div className="scoreModal">
        <span className="score">スコア： 300</span>
      </div>
      <div className="buttonContainer">
        <button
          className="button small"
          onClick={() => router.push(`/confirm/${difficulty}`)}
        >
          もう一度
        </button>
        <button className="button small" onClick={() => router.push("/")}>
          タイトルへ戻る
        </button>
      </div>
    </div>
  );
};

export default score;
