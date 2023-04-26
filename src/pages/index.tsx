import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { showInfoModal, showOptionModal } from "@/redux/features/Modal";
import ModalPortal from "./components/modals/modalPortal";
import InfoModal from "./components/modals/infoModal";
import PrivacyModal from "./components/modals/privacyModal";
import OptionModal from "./components/modals/optionModal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const info = useAppSelector((state) => state.modal.info);
  const privacy = useAppSelector((state) => state.modal.privacy);
  const option = useAppSelector((state) => state.modal.option);
  return (
    <>
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
          <button className="button" onClick={() => dispatch(showOptionModal())}>
            設定
          </button>
        </div>
      </div>
      {info && (
        <ModalPortal>
          <InfoModal />
        </ModalPortal>
      )}
      {privacy && (
        <ModalPortal>
          <PrivacyModal />
        </ModalPortal>
      )}
      {option && (
        <ModalPortal>
          <OptionModal />
        </ModalPortal>
      )}
    </>
  );
}
