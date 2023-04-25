import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container">
      <div className="title">
        <h1>AI Typing</h1>
        <p>全ての文はAIが作成!</p>
      </div>
      <div className="buttonContainer">
        <button className="button start">スタート</button>
        <button className="button">お知らせ</button>
        <button className="button">設定</button>
      </div>
    </div>
  );
}
