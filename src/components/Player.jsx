import { useState } from "react";

export default function Player({ initialName, symbol , isActive, onChnageName}) {
    const [playerName,setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick(){
        setIsEditing((editing) => !editing);
        onChnageName(symbol,playerName);
    }

    function handleChnage(event){
        setPlayerName(event.target.value);
    }
    let player = <span className="player-name">{playerName}</span>
    let buttonCaption = "Edit";

    if (isEditing){
        player = <input type="text" required value={playerName} onChange={handleChnage}></input>
        buttonCaption = "Save";
    }
    return (
        <li className={isActive?'active':undefined}>
            <span className="player">
                {player}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{buttonCaption}</button>
        </li>
    );
}