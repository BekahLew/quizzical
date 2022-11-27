export default function GameStart({ gameStart }) {

    return (
        <div className="intro-page">
            <h1>Quizzical</h1>
            <h2>Test your knowledge with this pop quiz game!</h2>
            <button onClick={gameStart}>Start Game</button>
        </div>
    )
}