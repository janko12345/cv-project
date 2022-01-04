import HobbyPiece from "./HobbyPiece";
import AddButton from "../universal/AddButton";
import InfoHeader from "./InfoHeader";
import { useState } from "react";
function Hobbies({ isSubmitted }) {
    const [numberOfPieces, setNumberOfPieces] = useState(1);
    return (
        <div className="profile-section">
            <InfoHeader name="Hobbies" />
            {[...new Array(numberOfPieces)].map((el, i) => (
                <HobbyPiece isSubmitted={isSubmitted} key={i} />
            ))}
            <AddButton setNumberOfPieces={setNumberOfPieces} />
        </div>
    );
}

export default Hobbies;
