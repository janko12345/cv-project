import About from "./main/About";
import Education from "./main/Education";
import Experience from "./main/Experience";
import Certifications from "./main/Certifications";
function MainInfo() {
    return (
        <div className="main">
            <About />
            <Education />
            <Experience />
            <Certifications />
        </div>
    );
}

export default MainInfo;
