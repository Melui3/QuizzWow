import React, { useState } from "react";
import Intro from "./components/intro.jsx";
import Quizz from "./components/quizz.jsx";
import "./App.css"; // styles principaux

function App() {
    const [started, setStarted] = useState(false);

    return (
        <div className="app-container">
            {!started ? (
                <Intro startQuizz={() => setStarted(true)} />
            ) : (
                <Quizz restartQuizz={() => setStarted(false)} />
            )}
        </div>
    );
}

export default App;
