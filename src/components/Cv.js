import { useState } from "react";
import Profile from "./Profile";
import Main from "./Main";
function Cv() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    function handleSubmit() {
        setIsSubmitted(!isSubmitted);
    }
    return (
        <div className="cv">
            <Profile isSubmitted={isSubmitted} />
            <Main isSubmitted={isSubmitted} handleSubmit={handleSubmit} />
        </div>
    );
}

export default Cv;
