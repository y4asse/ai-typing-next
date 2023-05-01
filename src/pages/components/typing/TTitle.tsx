import React from 'react'

const TTitle = ({difficulty} : {difficulty :string}) => {
  return (
    <div className="gameTitle">
      <h2>
        {difficulty === "easy"
          ? "簡単"
          : difficulty === "normal"
          ? "普通"
          : difficulty == "hard"
          ? "難しい"
          : "error"}
      </h2>
    </div>
  );
};

export default TTitle