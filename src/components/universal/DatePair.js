import { useState } from "react";

function DatePair() {
    const [values, setValues] = useState({ from: "", to: "" });
    let allowedChars = /^$|[-.\d]$/;
    let allowedFromats = {
        // counts on all leap years as well
        gregorian:
            /^$|^((((0[1-9]|1\d|2[0-8])\.(0[1-9]|1[0-2])|(29|30)\.(0[^02]|1[012])|31\.(0[13578]|1[02]))\....[^0])|(29\.02\.([02468][048]00|[13579][26]00|\d\d(?!00)[02468][048]|\d\d[13579][26])))$/,
    };

    return (
        <div className="date-pair">
            <input
                type="text"
                value={values.from}
                placeholder="from"
                onChange={(e) => {
                    if (allowedChars.test(e.target.value))
                        setValues({
                            ...values,
                            from: e.target.value,
                        });
                }}
                onBlur={() => console.log("blurred")}
            />
            -
            <input
                type="text"
                value={values.to}
                placeholder="to"
                onChange={(e) => {
                    if (allowedChars.test(e.target.value))
                        setValues({
                            ...values,
                            to: e.target.value,
                        });
                }}
            />
        </div>
    );
}

export default DatePair;
