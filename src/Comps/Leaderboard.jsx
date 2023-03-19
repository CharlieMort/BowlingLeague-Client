import React, { useEffect, useState } from "react";
import axios from "axios";

export const Leaderboard = ({forceUpdate}) => {
    const [players, setPlayers] = useState();

    useEffect(() => {
        axios.get("http://localhost:5000/players")
            .then(res => {
                setPlayers(res.data);
                console.log(res.data);
            })
    }, [forceUpdate]);

    if (!players) return;
    
    return(
        <div className="leaderboard">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Total Score</th>
                </tr>
                {
                    players.map((player) => {
                        return(
                            <tr>
                                <td>{player.name}</td>
                                <td>{player.totalScore}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}