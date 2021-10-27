import LanguagePiece from "./LanguagePiece";
import AddButton from "../shared/AddButton";
import InfoHeader from "./InfoHeader";
function Languages() {
    return (
        <div className="profile-section">
            <InfoHeader />
            <LanguagePiece />
            <AddButton />
        </div>
    );
}

export default Languages;
