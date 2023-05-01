import { useAppSelector } from "@/redux/hooks";
import React, { useEffect, useState } from "react";

const TScore = () => {
  const [scoreArray, setScoreArray] = useState<number[]>([0]);
  const score = useAppSelector((state) => state.score.value);

  useEffect(() => {
    if (score !== 0) {
      setScoreArray((prev) => {
        const spanElement = document.createElement("span");
        const difference = score - prev[prev.length - 1];
        spanElement.innerHTML = `${difference}`;
        spanElement.className =
          difference < 0 ? "differenceMinus" : "differencePlus";

        document.getElementById("differenceDiv-ts")?.appendChild(spanElement);
        setTimeout(() => {
          spanElement.remove();
        }, 1000);

        return [...prev, score];
      });
    }
    return () => {};
  }, [score]);

  return (
    <>
      <div className="gameScore">
        <span>スコア： {score}</span>
        <div id="differenceDiv-ts" className="difScore"></div>
      </div>
    </>
  );
};

export default TScore;
