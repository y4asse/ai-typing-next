import { closeOptionModal, closePrivacyModal } from "@/redux/features/Modal";
import { useAppDispatch } from "@/redux/hooks";
import { FC } from "react";

const OptionModal: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="modal">
      <h2>準備中</h2>
      <button
        className="button small2 reverse"
        onClick={() => {
          dispatch(closeOptionModal());
        }}
      >
        閉じる
      </button>
    </div>
  );
};

export default OptionModal;
