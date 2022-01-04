import ExperiencePiece from "./ExperiencePiece";
import AddButton from "../universal/AddButton";
import InfoHeader from "./InfoHeader";
import { useState } from "react";
function Experience({ isSubmitted }) {
    const [numberOfPieces, setNumberOfPieces] = useState(1);
    return (
        <div className="main-section">
            <InfoHeader name="Experience" />
            {[...new Array(numberOfPieces)].map((el, i) => (
                <ExperiencePiece isSubmitted={isSubmitted} key={i} />
            ))}
            <AddButton isSubmitted={isSubmitted} setNumberOfPieces={setNumberOfPieces} />
        </div>
    );
}

export default Experience;
