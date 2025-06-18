import React from "react";
import Joke from "./components/joke";
import jokesData from "./data/jokesData";
import "./index.css";

export default function App() {
    const [selectedType, setSelectedType] = React.useState("anime");

    const jokeElements = jokesData.map(joke => (
        <Joke 
            key={joke.id}
            setup={joke.setup}
            punchline={joke.punchline}
            selectedType={selectedType}
        />
    ));

    return (
        <div className="app-container">
            <h1>😂 Let's pick from the options below</h1>

            <div className="selector">
                <label>Select a type: </label>
                <select 
                    value={selectedType} 
                  
                >
                    <option>Anime</option>
                    <option>Movie</option>
                    <option>Cartoon</option>
                    <option>Web Series</option>
                </select>
            </div>

            {jokeElements}
        </div>
    );
}
