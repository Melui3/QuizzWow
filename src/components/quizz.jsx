import React, { useState } from "react";
import { quizzQuestions } from "../data/quizzQuestions.js";
import {getClassByKey} from "../data/classes.js";


export default function Quizz() {
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState({});
    const [finished, setFinished] = useState(false);
    const [bestClass, setBestClass] = useState(null);

    function choose(answer) {
        const newScore = { ...score };
        for (const className in answer.points) {
            newScore[className] = (newScore[className] || 0) + answer.points[className];
        }
        setScore(newScore);

        if (index < quizzQuestions.length - 1) {
            setIndex(index + 1);
        } else {
            finish(newScore);
        }
    }

    function finish(scoreMap) {
        let winner = null;
        let max = -1;
        for (const cls in scoreMap) {
            if (scoreMap[cls] > max) {
                max = scoreMap[cls];
                winner = cls;
            }
        }
        setBestClass(getClassByKey(winner));
        setFinished(true);
    }

    function restartQuizz() {
        setIndex(0);
        setScore({});
        setFinished(false);
        setBestClass(null);
    }

    if (finished) {
        return (
            <div className="quizz-container">
                <h2 className="quizz-title">Tu es…</h2>
                <div
                    className="quizz-bestclass"
                    style={{ color: bestClass.color }}
                >
                    {bestClass.name}
                </div>
                <img
                    src={bestClass?.image}
                    alt={bestClass?.name}
                    className="quizz-image"
                />
                <p className="quizz-description">{bestClass.description}</p>
                <button className="quizz-button" onClick={restartQuizz}>
                    Refaire le quizz
                </button>
            </div>
        );
    }

    return (
        <div className="quizz-container">
            <h2 className="quizz-question-count">
                Question {index + 1} / {quizzQuestions.length}
            </h2>
            <h3 className="quizz-question">{quizzQuestions[index].question}</h3>
            <div className="quizz-answers">
                {quizzQuestions[index].answers.map((a, i) => (
                    <button
                        key={i}
                        onClick={() => choose(a)}
                        className="quizz-answer-button"
                    >
                        {a.text}
                    </button>
                ))}
            </div>
        </div>
    );
}
