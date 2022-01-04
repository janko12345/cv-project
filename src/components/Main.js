import About from "./main/About";
import Education from "./main/Education";
import Experience from "./main/Experience";
import Certifications from "./main/Certifications";
import Submit from "./main/Submit";
function MainInfo({ isSubmitted, handleSubmit }) {
    return (
        <div className="main">
            <About isSubmitted={isSubmitted} />
            <Education isSubmitted={isSubmitted} />
            <Experience isSubmitted={isSubmitted} />
            <Certifications isSubmitted={isSubmitted} />
            <Submit isSubmitted={isSubmitted} handleSubmit={handleSubmit} />
        </div>
    );
}

export default MainInfo;
