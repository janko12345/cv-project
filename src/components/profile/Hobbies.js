import HobbyPiece from "./HobbyPiece";
import AddButton from "../shared/AddButton";
import InfoHeader from "./InfoHeader";
function Hobbies() {
    return (
        <div className="profile-section">
            <InfoHeader />
            <HobbyPiece />
            <AddButton />
        </div>
    );
}

export default Hobbies;
