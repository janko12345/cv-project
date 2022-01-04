import LanguagePiece from "./LanguagePiece";
import AddButton from "../universal/AddButton";
import InfoHeader from "./InfoHeader";
import { useState } from "react";
function Languages({ isSubmitted }) {
    const [numberOfPieces, setNumberOfPieces] = useState(1);
    return (
        <div className="profile-section">
            <InfoHeader name="Languages" />
            {[...new Array(numberOfPieces)].map((el, i) => (
                <LanguagePiece isSubmitted={isSubmitted} key={i} />
            ))}
            <AddButton setNumberOfPieces={setNumberOfPieces} />
        </div>
    );
}

export default Languages;
