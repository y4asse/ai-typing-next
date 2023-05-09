import { closePrivacyModal } from "@/redux/features/Modal";
import { useAppDispatch } from "@/redux/hooks";
import { FC } from "react";

const PrivacyModal: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="modal">
      <span
        className="batsu"
        onClick={() => {
          dispatch(closePrivacyModal());
        }}
      ></span>
      <h2>プライバシーポリシー</h2>
      <h4>
        ・当サイト（タイピングゲーム）では、ユーザーの個人情報やユーザー情報を収集・利用しておりません。
      </h4>
      <p>
        当サイトでは、ユーザーの利便性向上やサイト運営のため、クッキーを使用することがあります。ただし、クッキーによって収集される情報は匿名であり、個人を特定できる情報を含んでおりません。
      </p>
      <h4>・クッキーやアクセス解析について</h4>
      <p>
        当サイトでは、ユーザーの利便性向上やサイト運営のため、クッキーを使用することがあります。ただし、クッキーによって収集される情報は匿名であり、個人を特定できる情報を含んでおりません。
        また、当サイトではアクセス解析ツールを使用して、サイトの利用状況やアクセス数を把握することがあります。これによって収集される情報も、個人を特定できる情報を含んでおりません。
      </p>
      <h4>・第三者への情報提供について</h4>
      <p>
        当サイトでは、個人情報やユーザー情報を収集・利用していないため、第三者に提供することはありません。
      </p>
      <h4>・プライバシーポリシーの変更について</h4>
      <p>
        当サイトは、法令の改正やサービス内容の変更などを受け、プライバシーポリシーを改定することがあります。その際は、このページ上で変更内容をお知らせいたします。
      </p>
      <h4>・お問い合わせ</h4>
      <p>
        当サイトのプライバシーポリシーに関するお問い合わせは、以下の連絡先までお願いいたします。
        <br />
        <a
          style={{ color: "white" }}
          href="https://twitter.com/y4isse"
          target="_blank"
          rel="noopener noreferrer"
        >
          (y4isse)
        </a>
      </p>
      <button
        className="button small2 reverse"
        onClick={() => {
          dispatch(closePrivacyModal());
        }}
      >
        閉じる
      </button>
    </div>
  );
};

export default PrivacyModal;
