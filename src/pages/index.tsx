import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { showInfoModal, showOptionModal } from "@/redux/features/Modal";
import InfoModal from "./components/modals/infoModal";
import PrivacyModal from "./components/modals/privacyModal";
import OptionModal from "./components/modals/optionModal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const infoModalOpen = useAppSelector((state) => state.modal.info);
  const optionModalOpen = useAppSelector((state) => state.modal.option);
  return (
    <>
      {infoModalOpen && <InfoModal />}
      {optionModalOpen && <OptionModal />}
      <div className="container">
        <div className="title">
          <h1>AI Typing</h1>
          <p>全ての文はAIが作成!</p>
        </div>
        <div className="buttonContainer">
          <button
            onClick={() => router.push("/difficulty")}
            className="button start"
          >
            スタート
          </button>
          <button className="button" onClick={() => dispatch(showInfoModal())}>
            お知らせ
          </button>
          <button
            className="button"
            onClick={() => dispatch(showOptionModal())}
          >
            設定
          </button>
        </div>
      </div>
    </>
  );
}
