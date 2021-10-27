import { useState } from "react";
import InfoHeader from "./InfoHeader";

function Certifications() {
    const [value, setValue] = useState("");
    return (
        <div className="main-section">
            <InfoHeader name="Certifications" />
            <textarea
                cols="30"
                rows="10"
                style={{ resize: "none" }}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            ></textarea>
        </div>
    );
}

export default Certifications;
