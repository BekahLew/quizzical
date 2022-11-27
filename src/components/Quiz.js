import { useEffect, useState } from "react"

export default function Quiz( { question, restartGame }) {

    const checkAnswers = () => {

    }

    const element = document.createElement('div');

    function decodeHTMLEntities (str) {
    if(str && typeof str === 'string') {
        // strip html tags
        str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
        element.innerHTML = str;
        str = element.textContent;
        element.textContent = '';
    }

    return str;
    }
    
    const questionElement = question.map((q, index) => {
        console.log(q.allAnswers);
        return (
            <div key={index} className="questions">
                <h2>{decodeHTMLEntities(q.question)}</h2>
                <div>{q.allAnswers.map(answer => {
                    return <button>{decodeHTMLEntities(answer)}</button>
                })}</div>
            </div>
        )
    })

    return (
        <div className="quiz">
            <h1>Quiz</h1>
            {questionElement}
            <button onClick={checkAnswers}>Check Answers</button> <button onClick={restartGame}>New Game</button>
        </div>
    )
}