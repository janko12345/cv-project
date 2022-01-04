import { useState } from "react";
function LanguagePiece({ isSubmitted }) {
    const [value, setValue] = useState("");
    return (
        <div className="language-piece" onClick={() => console.log("clicked language piece")}>
            <input
                type="text"
                placeholder="name"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
            <span>-</span>
            <input
                type="text"
                placeholder="level"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
        </div>
    );
}

export default LanguagePiece;
