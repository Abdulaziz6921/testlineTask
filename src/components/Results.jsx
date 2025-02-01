import React from "react";
import Confetti from "react-confetti";

const Results = ({ score, correctAnswers, totalQuestions, onRestart }) => {
  const percentage = (correctAnswers / totalQuestions) * 100;
  const isPerfectScore = percentage === 100;

  return (
    <div>
      {isPerfectScore && <Confetti />}
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-6">Quiz Complete!</h2>

        <div className="mb-8">
          <div className="text-5xl font-bold text-indigo-600 mb-2">
            {Math.round(percentage)}%
          </div>
          <p className="text-gray-600 mb-2">
            Correct Answers: {correctAnswers} out of {totalQuestions} questions
          </p>
          <p className="text-gray-500 text-sm">
            Total Score: {score} (including time bonuses)
          </p>
        </div>

        <button
          onClick={onRestart}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors w-full"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Results;
