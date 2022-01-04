import { useState } from "react";
import InfoHeader from "./InfoHeader";

function Certifications({ isSubmitted }) {
    const [value, setValue] = useState("");
    return (
        <div className="main-section">
            <InfoHeader name="Certifications" />
            {isSubmitted ? (
                <div style={{ marginBottom: "4em" }}></div>
            ) : (
                <textarea
                    cols="30"
                    rows="4"
                    style={{ resize: "none" }}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                ></textarea>
            )}
        </div>
    );
}

export default Certifications;
