import EducationPiece from "./EducationPiece";
import AddButton from "../universal/AddButton";
import InfoHeader from "./InfoHeader";
import { useState } from "react";
function Education() {
    const [numberOfPieces, setNumberOfPieces] = useState(1);
    return (
        <div className="main-section">
            <InfoHeader name="Education" />
            {[...new Array(numberOfPieces)].map((el, i) => (
                <EducationPiece key={i} />
            ))}
            <AddButton setNumberOfPieces={setNumberOfPieces} />
        </div>
    );
}

export default Education;
