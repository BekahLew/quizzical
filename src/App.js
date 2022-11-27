import './App.css';
import { useState, useEffect } from 'react';
import GameStart from './components/GameStart';
import Quiz from './components/Quiz';

function App() {
	const [gameStarted, setGameStarted] = useState(false)

	const [questionData, setQuestionData] = useState({})
	const [questions, setQuestions] = useState([{
		question: "",
		allAnswers: []
	}])

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
			question: question.question.replace(/&quot;/g,'"'),
			allAnswers: [...question.incorrect_answers, question.correct_answer]
		})))
	}

	console.log(questionData)
	console.log(questions)
    
	return (
		<div className="App">
			{gameStarted ? <Quiz question={questions} restartGame={gameStart}/> : <GameStart gameStart={gameStart}/>}
		</div>
	);
}

export default App;
