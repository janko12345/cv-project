import { useState } from "react";
import InfoHeader from "./InfoHeader";

function About({ isSubmitted }) {
    const [value, setValue] = useState("");
    return (
        <div className="main-section">
            <InfoHeader name="About" />
            {isSubmitted ? (
                <p style={value ? "" : { marginBottom: "4em" }}>{value}</p>
            ) : (
                <textarea cols="30" rows="4" value={value} onChange={(e) => setValue(e.target.value)}></textarea>
            )}
        </div>
    );
}

export default About;
