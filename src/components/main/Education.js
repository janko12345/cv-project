import EducationPiece from "./EducationPiece";
import AddButton from "../universal/AddButton";
import InfoHeader from "./InfoHeader";
import { useState } from "react";
function Education({ isSubmitted }) {
    const [numberOfPieces, setNumberOfPieces] = useState(1);
    return (
        <div className="main-section">
            <InfoHeader name="Education" />
            {[...new Array(numberOfPieces)].map((el, i) => (
                <EducationPiece isSubmitted={isSubmitted} key={i} />
            ))}
            <AddButton isSubmitted={isSubmitted} setNumberOfPieces={setNumberOfPieces} />
        </div>
    );
}

export default Education;
