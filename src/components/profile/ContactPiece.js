import { useState } from "react";

function ContactPiece({ name, type, isSubmitted }) {
    const [value, setValue] = useState("");
    return (
        <div className="contact-piece">
            <label htmlFor={name}>{name}:</label>
            <input type={type} id={name} value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    );
}
ContactPiece.defaultProps = {
    type: "text",
};
export default ContactPiece;
