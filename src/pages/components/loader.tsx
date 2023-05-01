import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";

const Loader = () => {
  const textArray = "AIがテキストを生成中です...".split("");
  const [count, setCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev > textArray.length) {
          return 0;
        }
        return prev + 1;
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="container">
      <div className="title">
        <h3>
          {textArray.map((word, index) => {
            if (index <= count) {
              return <span key={index}>{word}</span>;
            }
            return "";
          })}
        </h3>
      </div>
      <div className="loaderContainer">
        <div className="loader">
          <div className="cubes">
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="cube">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
