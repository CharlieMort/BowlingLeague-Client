import React, { useState } from "react";
import { AddGame } from "./AddGame";

export const Admin = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [password, setPassword] = useState("");

    const check = (e) => {
        if (password === "hotmommys") {
            setIsAdmin(true);
        }
        setPassword("");
    }

    if (isAdmin) {
        return (
            <div>
                <AddGame />
            </div>
        )
    }
    else {
        return (
            <div>
                <h2>Password</h2>
                <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={check}>Enter</button>
            </div>
        )
    }
}