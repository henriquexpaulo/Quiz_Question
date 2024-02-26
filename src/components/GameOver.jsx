import { useContext } from "react";
import { QuizContext} from "../context/quiz";

import WellDone from "../img/welldone.svg"

import "./GameOver.css"

const GameOver = () => {

  const [quizState, dispatch] = useContext(QuizContext);


  return (
    <div id="gameover">
        <h2>End Game</h2>
        <p>Pontuação: {quizState.score}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.length}{""} perguntas</p>
        <img src={WellDone} alt="EndGame" />
        <button>Reiniciar</button>
    </div>
  )
}

export default GameOver