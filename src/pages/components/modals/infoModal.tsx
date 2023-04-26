import { closeInfoModal } from "@/redux/features/Modal";
import { useAppDispatch } from "@/redux/hooks";
import { FC } from "react";

const InfoModal: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="modal">
      <h3>遊び方</h3>
      <p>
        ゲームを開始するとAIが自動で7つテキストを生成してくれます.
        簡単，普通，難しい，のコースが選べます.
        制限時間内に出題されたテキストをタイピングすると得点が加算されます.
        文章が長く，残り時間が多いほどポイントは高いです.
        <br />
        escapeを押すとゲームが終了します.
      </p>
      <h3>その他</h3>
      <p>
        文章はすべてAIが作っています. なので,たまに変なこと言うかもしれませんが,
        大目に見てあげてください.
        これから気分で機能を追加していこうと思っていますので,
        もしよかったらtwitterフォローしてください.
        <a
          style={{ color: "white" }}
          href="https://twitter.com/y4isse"
          target="_blank"
          rel="noopener noreferrer"
        >
          (y4isse)
        </a>
        プロンプトについてはひみつです.
        こんなプロンプトがあれば面白いというアイデアがあればぜひ教えてください.
      </p>
      <button
        className="button small2 reverse mt-30"
        onClick={() => {
          dispatch(closeInfoModal());
        }}
      >
        閉じる
      </button>
    </div>
  );
};

export default InfoModal;