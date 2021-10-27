import ExperiencePiece from "./ExperiencePiece";
import AddButton from "../shared/AddButton";
import InfoHeader from "./InfoHeader";
function Experience() {
    return (
        <div className="main-section">
            <InfoHeader />
            <ExperiencePiece />
            <AddButton />
        </div>
    );
}

export default Experience;