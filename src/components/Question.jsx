import React from "react";

const Question = ({ question, onAnswer, timeLeft }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-500">Question {question.id}</span>
        <span className="text-sm font-semibold text-indigo-600">
          Time: {timeLeft}s
        </span>
      </div>

      <h2 className="text-xl font-semibold mb-6">{question.question}</h2>

      <div className="grid gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className="text-left p-4 border rounded-lg hover:bg-indigo-100 transition-colors hover:font-semibold"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
