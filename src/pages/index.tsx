import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { showInfoModal, showOptionModal } from "@/redux/features/Modal";
import InfoModal from "./components/modals/infoModal";
import OptionModal from "./components/modals/optionModal";
import Image from "next/image";
import imageSrc from "./image/OIG.jpg"

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
          <Image
            src={imageSrc}
            width={70}
            height={70}
            alt="Icon"
            style={{borderRadius: "40%"}}
          />
          <h1>AI Typing</h1>
          <p>GPTが文を生成！</p>
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
