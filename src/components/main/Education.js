import EducationPiece from "./EducationPiece";
import AddButton from "../shared/AddButton";
import InfoHeader from "./InfoHeader";
function Education() {
    return (
        <div className="main-section">
            <InfoHeader name="Education" />
            <EducationPiece />
            <AddButton />
        </div>
    );
}

export default Education;
