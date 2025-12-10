import React from "react";


export default function Intro({ startQuizz }) {
    return (
        <div className="intro-container">
            <h1 className="intro-title">Quel DPS de WoW es-tu ?</h1>
            <p className="intro-text">
                Réponds à quelques questions et découvre si tu es Guerrier, Mage,
                Voleur... ou un autre danger public des donjons !
            </p>
            <button className="intro-button" onClick={startQuizz}>
                Lancer le quizz
            </button>
        </div>
    );
}
