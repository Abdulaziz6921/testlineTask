import React from 'react';
import { FaPlay } from 'react-icons/fa';

const QuizStart = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6 text-indigo-600">Quiz Challenge</h1>
        <p className="text-gray-600 mb-8">
          Test your knowledge and earn points! Are you ready to begin?
        </p>
        <button
          onClick={onStart}
          className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors w-full"
        >
          <FaPlay />
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizStart;