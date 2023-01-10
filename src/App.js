import './App.css';
import { useState, useEffect } from 'react';
import GameStart from './components/GameStart';
import Quiz from './components/Quiz';

function App() {
	const [gameStarted, setGameStarted] = useState(false)

	const [questionData, setQuestionData] = useState({})
	const [questions, setQuestions] = useState([{
		question: "",
		allAnswers: [],
		selectedAnswer: ""
	}])

	// Shuffle the answers
	function shuffleAnswers(array) {
		let currentIndex = array.length,
			randomIndex

		while(currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex)
			currentIndex--

			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
		}

		return array
	}

	useEffect(() => {
		async function getQuestions() {
			const res = await fetch('https://opentdb.com/api.php?amount=5')
			const data = await res.json()
			setQuestionData(data.results)
		}
		getQuestions()
	}, [questions])

	function gameStart() {
		setGameStarted(true)
		setQuestions(questionData.map(question => ({
			question: question.question,
			allAnswers: question.incorrect_answers > 1 ? shuffleAnswers([...question.incorrect_answers, question.correct_answer]) : [...question.incorrect_answers, question.correct_answer].sort().reverse(),
			selectedAnswer: ""
		})))
	}
    
	return (
		<div className="App">
			{gameStarted ? <Quiz questions={questions} restartGame={gameStart}/> : <GameStart gameStart={gameStart}/>}
		</div>
	);
}

export default App;
