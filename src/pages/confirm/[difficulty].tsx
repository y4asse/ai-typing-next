import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

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

export default function confirm({ difficulty }: DifProps) {
  const router = useRouter();
  return (
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
  );
}
