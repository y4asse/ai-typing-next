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
const connection = ({ difficulty }: DifProps) => {
  const router = useRouter();
  const clickHandler = () => {
    router.push("/");
  };
  return (
    <div>
      <div className="container">
        <div className="title">
          <h3>AIからテキストを生成中...</h3>
        </div>
        <div className="buttonContainer">
          <button className="button small" onClick={clickHandler}>
            キャンセル
          </button>
        </div>
      </div>
    </div>
  );
};

export default connection;
