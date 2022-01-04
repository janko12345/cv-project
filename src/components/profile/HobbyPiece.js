import { useState } from "react";
function HobbyPiece({ isSubmitted }) {
    const [value, setValue] = useState("");
    return (
        <div className="hobby-piece">
            {isSubmitted ? <span>{value}</span> : <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />}
        </div>
    );
}

export default HobbyPiece;
