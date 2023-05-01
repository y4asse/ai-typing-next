//SSG

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loader from "../components/loader";
import { GetStaticPaths, GetStaticProps } from "next";

export default function play({difficulty}: {difficulty: string}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") {
      setIsLoading(true);
      router.push(`/game/${difficulty}`);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);

    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="title">
            <h1>
              {difficulty === "easy"
              ? "簡単"
              : difficulty === "normal"
              ? "普通"
              : difficulty == "hard"
              ? "難しい"
              : "error"}
            </h1>
          </div>
          <div className="mb-tb">
            <span style={{ fontSize: 30 }}>
              スペースかエンターを押すと，インポートを開始します
            </span>
          </div>
          <div className="buttonContainer">
            <button
              className="button small"
              onClick={() => router.push("/difficulty")}
            >
              難易度選択へ戻る
            </button>
            <button className="button small" onClick={() => router.push("/")}>
              タイトルへ戻る
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { difficulty: "easy" } },
      { params: { difficulty: "normal" } },
      { params: { difficulty: "hard" } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({params}) => {
  const difficulty = params?.difficulty
  return {
    props: {difficulty}
  }
}