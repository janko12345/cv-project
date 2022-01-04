import { useState } from "react";
function LanguagePiece({ isSubmitted }) {
    const [value, setValue] = useState({ name: "", level: "" });
    return (
        <div className="language-piece" onClick={() => console.log("clicked language piece")}>
            <input
                type="text"
                placeholder="name"
                value={value.name}
                onChange={(e) => {
                    setValue({ ...value, name: e.target.value });
                }}
            />
            <span>-</span>
            <input
                type="text"
                placeholder="level"
                value={value.level}
                onChange={(e) => {
                    setValue({ ...value, level: e.target.value });
                }}
            />
        </div>
    );
}

export default LanguagePiece;
