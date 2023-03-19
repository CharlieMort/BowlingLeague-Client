import React, { useEffect, useState } from "react";
import axios from "axios";


export const Games = ({forceUpdate}) => {
    const [games, setGames] = useState();

    useEffect(() => {
        axios.get("http://localhost:5000/games-with-name")
            .then(res => {
                console.log(res.data);
                setGames(res.data);
            })
    }, [forceUpdate])

    if (!games) return;

    return(
        <div className="games">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Score Card</th>
                    <th>Date</th>
                </tr>
                {
                    games.map((game, idx) => {
                        return(
                            <tr>
                                <td>{game.name}</td>
                                <td>{game.score}</td>
                                <td>{game.scoreCard}</td>
                                <td>{game.date}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}