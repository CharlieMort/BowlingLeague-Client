import React, { useState } from "react";
import axios from "axios";

export const AddGame = () => {
    const [name, setName] = useState("");
    const [scoreCard, setScoreCard] = useState("");
    const [date, setDate] = useState("");
    const [gameNum, setGameNum] = useState(0);

    function onSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:5000/add-game", {
            name:name, 
            scoreCard:scoreCard, 
            date:date,
            gameNum:gameNum
        });
        setScoreCard("");
        setGameNum(0);
    }

    function onChange(e) {
        let chain = "";
        if (scoreCard.length < 27) {
            chain = e.target.value.split(".").join("").replace(/(.{2})/g,"$1.");
        }
        else {
            chain = e.target.value;
        }
        setScoreCard(chain);
    }

    return(
        <div className="AddGame">
            <h2>Add Game</h2>
            <form onSubmit={onSubmit}>
                <h3>Name</h3>
                <input type="text" placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)} />
                <h3>ScoreCard</h3>
                <input type="text" placeholder="XX.XX.XX.XX.XX" value={scoreCard} onChange={onChange} />
                <h3>Date - DD/MM/YY</h3>
                <input type="test" value={date} onChange={(e) => setDate(e.target.value)} />
                <h3>Game Number</h3>
                <input type="number" value={gameNum} onChange={(e) => setGameNum(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}