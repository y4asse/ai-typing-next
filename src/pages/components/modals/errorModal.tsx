import { closeErrorModal, closePrivacyModal } from "@/redux/features/Modal";
import { useAppDispatch } from "@/redux/hooks";
import { FC } from "react";

const PrivacyModal: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="modal error">
      <h3>エラーが発生しました．もう一度実行してください.</h3>
      <button
        className="button small2 reverse"
        onClick={() => {
          dispatch(closeErrorModal());
        }}
      >
        閉じる
      </button>
    </div>
  );
};

export default PrivacyModal;
