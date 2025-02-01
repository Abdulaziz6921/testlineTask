import { useState, useEffect } from "react";
import axios from "axios";
import QuizStart from "./components/QuizStart";
import Question from "./components/Question";
import Results from "./components/Results";
import Loader from "./components/Loader";

const QUESTION_TIMER = 30; // seconds per question

// Mock data for when API is unavailable
const MOCK_QUIZ_DATA = {
  questions: [
    {
      question: "What is the smallest prime number?",
      options: ["1", "2", "3", "5"],
      correct_answer: "2",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "South Korea", "Thailand"],
      correct_answer: "Japan",
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Quartz"],
      correct_answer: "Diamond",
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: [
        "Charles Dickens",
        "William Shakespeare",
        "Mark Twain",
        "Jane Austen",
      ],
      correct_answer: "William Shakespeare",
    },
    {
      question: "What is the largest organ in the human body?",
      options: ["Liver", "Brain", "Skin", "Heart"],
      correct_answer: "Skin",
    },
  ],
};

function App() {
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [gameState, setGameState] = useState("start");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIMER);

  useEffect(() => {
    fetchQuizData();
  }, []);

  const fetchQuizData = async () => {
    try {
      const response = await axios.get("/ai", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      console.log("API Response:", response.data);

      // Transforming the API data
      const transformedData = {
        questions: response.data.questions.map((question) => ({
          question: question.description || "No question text available",
          options: question.options.map((option) => option.description),
          correct_answer:
            question.options.find((option) => option.is_correct)?.description ||
            "No correct answer",
        })),
      };

      console.log("Transformed Questions:", transformedData); // Debugging
      setQuizData(transformedData);
    } catch (err) {
      console.error("Using mock data due to API error:", err);
      setQuizData(MOCK_QUIZ_DATA);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let timer;
    if (gameState === "playing" && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleAnswer(null); // Time's up, move to next question
            return QUESTION_TIMER;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  const startQuiz = () => {
    setGameState("playing");
    setCurrentQuestion(0);
    setScore(0);
    setCorrectAnswers(0);
    setTimeLeft(QUESTION_TIMER);
  };

  const handleAnswer = (selectedAnswer) => {
    if (!quizData) return;

    const currentQuestionData = quizData.questions[currentQuestion];
    if (selectedAnswer === currentQuestionData.correct_answer) {
      // Calculating bonus points based on time left
      const timeBonus = Math.floor(timeLeft / 5);
      setScore((prev) => prev + 1 + timeBonus);
      setCorrectAnswers((prev) => prev + 1);
    }

    if (currentQuestion + 1 < quizData.questions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setTimeLeft(QUESTION_TIMER);
    } else {
      setGameState("results");
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {gameState === "start" && <QuizStart onStart={startQuiz} />}

      {gameState === "playing" && quizData && (
        <Question
          question={{
            id: currentQuestion + 1,
            question: quizData.questions[currentQuestion].question,
            options: quizData.questions[currentQuestion].options,
          }}
          onAnswer={handleAnswer}
          timeLeft={timeLeft}
        />
      )}

      {gameState === "results" && (
        <Results
          score={score}
          correctAnswers={correctAnswers}
          totalQuestions={quizData.questions.length}
          onRestart={startQuiz}
        />
      )}
    </div>
  );
}

export default App;
