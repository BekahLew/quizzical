// import { useState } from 'react'
import { nanoid } from 'nanoid'

export default function Quiz( { questions, restartGame}) {
    // replace encoded HTML characters
    const element = document.createElement('div');

    function decodeHTMLEntities (str) {
    if(str && typeof str === 'string') {
        str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
        element.innerHTML = str;
        str = element.textContent;
        element.textContent = '';
    }

    return str;
    }

    function setSelected() {
        questions.map(question => {
            return (
                console.log(question.allAnswers)
            )
        })
    }

    const checkAnswers = () => {

    }
    
    const questionElement = questions.map((q, questionsKey) => {
        return (
            <div key={questionsKey} className="questions">
                <h2>{decodeHTMLEntities(q.question)}</h2>
                <div>{q.allAnswers.map((answer, answerKey) => {
                    return <button key={answerKey} className="answer" onClick={() => setSelected(true)}>{decodeHTMLEntities(answer)}</button>
                })}</div>
            </div>
        )
    })

    return (
        <div className="quiz">
            <h1>Quiz</h1>
            {questionElement}
            <div className="quiz-buttons">
                <button onClick={checkAnswers}>Check Answers</button> <button onClick={restartGame}>New Game</button>
            </div>
        </div>
    )
}