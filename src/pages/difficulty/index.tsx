import { useRouter } from 'next/router';
import React from 'react'

const difficulty = () => {
    const router = useRouter();
  return (
    <>
    <div className="container">
      <div className="title">
        <h2>難易度を選択</h2>
      </div>
      <div className="buttonContainer">
        <button className="button" onClick={() => router.push("/confirm/easy")}>簡単</button>
        <button className="button" onClick={() => router.push("/confirm/normal")}>普通</button>
        <button className="button" onClick={() => router.push("/confirm/hard")}>難しい</button>
        <button onClick={() => router.push("/")} className="button small">タイトルへ戻る</button>
      </div>
    </div>
    </>
  );
}

export default difficulty