import React from "react";
import { Games } from "./Games";
import { Leaderboard } from "./Leaderboard";

export const Home = () => {
    return(
        <div className="home">
            <Leaderboard />
            <Games />
        </div>
    )
}