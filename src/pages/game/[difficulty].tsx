import React, { useState } from "react";
import TTitle from "../components/typing/TTitle";
import TScore from "../components/typing/TScore";
import TText from "../components/typing/TText";
import TTimer from "../components/typing/TTimer";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import axios from "axios";
import { Configuration, OpenAIApi } from "openai";
import { useDispatch } from "react-redux";
import { clearScore } from "@/redux/features/Scores";
import {
  addEnglishText,
  addJapaneseText,
  clearEnglishText,
  clearJapaneseText,
  clearTimer,
  setCurrentCharIndex,
  setCurrentTextIndex,
} from "@/redux/features/Game";
import Start from "../components/start";

type Props = {
  data: { role: string; content: string };
  difficulty: string;
};

const Game = (props: Props) => {
  const dispatch = useDispatch();
  dispatch(clearEnglishText());
  dispatch(clearJapaneseText());
  dispatch(clearScore());
  dispatch(setCurrentCharIndex(0));
  dispatch(setCurrentTextIndex(0));
  dispatch(clearTimer());
  const difficulty = props.difficulty;
  const data = props.data.content;
  const [gameStart, setGameStart] = useState(false);

  const firstSplitArray = data.split(")");
  firstSplitArray.pop();
  for (let i = 0; i < firstSplitArray.length; i++) {
    const text = firstSplitArray[i];
    const secondSplitArray = text.split("(");
    secondSplitArray[0] = secondSplitArray[0].trim();
    secondSplitArray[0] = secondSplitArray[0].slice(3);
    dispatch(addEnglishText(secondSplitArray[0]));
    dispatch(addJapaneseText(secondSplitArray[1]));
  }

  return (
    <>
      {!gameStart ? (
        <Start setGameStart={setGameStart} />
      ) : (
        <div className="container">
          <div className="gameGrid">
            <TTitle difficulty={difficulty} />
            <TScore />
            <TText difficulty={difficulty} />
            <TTimer />
          </div>
        </div>
      )}
    </>
  );
};

export default Game;

export const getServerSideProps: GetServerSideProps = async ({
  query,
  res,
}) => {
  console.log(process.env.OPENAI_API_KEY);
  const { difficulty } = query;
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  let content = "";
  switch (difficulty) {
    case "easy":
      content =
        "色々な単語をランダムでを7個教えて.ただしを「-」をつけずに，英単語(日本語訳)の形式で返して，余分な記号で囲わないでください．また，例文などの余計なことは書かないでください．";
      break;
    case "normal":
      content =
        "おもしろい文章を7個英語で作って.ただし,それぞれ5 words位の文章で,英文(日本語訳)の形式で返して,余分な記号で囲わないでください";
      break;
    case "hard":
      content =
        "おもしろい文章を7個英語で作って.ただし,それぞれ10 words位の文章で,英文(日本語訳)の形式で返して,余分な記号で囲わないでください";
      break;
  }
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content }],
  });
  console.log(completion.data.choices[0].message);

  return {
    props: {
      data: completion.data.choices[0].message,
      difficulty,
    },
  };
};
