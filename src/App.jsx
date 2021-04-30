import React, { useState } from 'react'


const question = [
	{
		questionText: "Назовите столицу США",
		answerOptions: [
			{ answerText: "Бостон", isCorrect: false },
			{ answerText: "Вашингтон", isCorrect: true },
			{ answerText: "Куинс", isCorrect: false },
			{ answerText: "Статен-Айленд", isCorrect: false },
		]
	},
	{
		questionText: "Движок JS в браузере Chrome",
		answerOptions: [
			{ answerText: "V8", isCorrect: true },
			{ answerText: "Chakra", isCorrect: false },
			{ answerText: "SquirrelFish", isCorrect: false },
			{ answerText: "Narcissus", isCorrect: false },
		]
	},
	{
		questionText: "Сколько типов данных в js",
		answerOptions: [
			{ answerText: "7", isCorrect: false },
			{ answerText: "6", isCorrect: false },
			{ answerText: "5", isCorrect: false },
			{ answerText: "8", isCorrect: true },
		]
	},
	{
		questionText: "Что требует JS при использовании this?",
		answerOptions: [
			{ answerText: "Конструктор", isCorrect: false },
			{ answerText: "Стрелочную функцию", isCorrect: false },
			{ answerText: "Контекст", isCorrect: true },
			{ answerText: "Состояние", isCorrect: false },
		]
	}
]


const App = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [score, setScore] = useState(0)
	const [showScore, setShowScore] = useState(false)

	const handleAnswerClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1)
		}

		const nextQuestion = currentQuestion + 1

		if (nextQuestion < question.length) {
			setCurrentQuestion(nextQuestion)
		} else {
			setShowScore(true)
		}
	}

const resetQuiz = ( ) => {
	setCurrentQuestion(0)
	setScore(0)
	setShowScore(false)
}


	return (
		<div className="app">

			{ showScore ?
				(<div className="section__score">
					<div> Правильных ответов: {score} из {question.length} </div>
					<button onClick={ resetQuiz } > Пройти заново </button>
				</div>
				) :
				<div className="quiz">
					<div className="question__section">
						<div className="question__count">
							<span> Вопрос {currentQuestion + 1} </span> / {question.length}
						</div>
						<div className="question__text">
							{question[currentQuestion].questionText}
						</div>
					</div>
					<div className="answer__section">
						{question[currentQuestion].answerOptions.map((answ, index) => (
							<button key={index}
								onClick={() => handleAnswerClick(answ.isCorrect)}
							> { answ.answerText} </button>
						))}
					</div>
				</div>
			}

		</div>
	)
}

export default App
