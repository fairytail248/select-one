import React from "react";

export default function Joke({ setup, punchline, selectedType }) {
    const [isShown, setIsShown] = React.useState(false);
    const [error, setError] = React.useState("");

    function toggleShown() {
        if (selectedType.toLowerCase() !== punchline.toLowerCase()) {
            setError(`❌ Wrong selection! You picked ${selectedType}, but this is ${punchline}.`);
            setIsShown(false);
        } else {
            setError("");
            setIsShown(prev => !prev);
        }
    }

    return (
        <div className="joke-card">
            {setup && <h3>{setup}</h3>}
            {isShown && <p>{punchline}</p>}
            <button onClick={toggleShown}>
                {isShown ? "Hide" : "Show"} punchline
            </button>
            {error && <p className="error">{error}</p>}
            <hr />
        </div>
    );
}
