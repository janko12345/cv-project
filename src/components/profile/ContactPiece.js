import { useState } from "react";

function ContactPiece(props) {
    const [value, setValue] = useState("");
    return (
        <div>
            <label htmlFor={props.name}>{props.name}:</label>
            <input
                type={props.type}
                id={props.name}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
}
ContactPiece.defaultProps = {
    type: "text",
};
export default ContactPiece;
