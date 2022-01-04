import { useState } from "react";
import DatePair from "../universal/DatePair";

function EducationPiece({ isSubmitted }) {
    const [values, setValues] = useState({
        date: { from: "", to: "" },
        school: "",
        titleOfStudy: "",
    });
    return (
        <div className="education-piece">
            <DatePair isSubmitted={isSubmitted} />
            <div>
                {isSubmitted ? (
                    <span>{values.titleOfStudy + ":"}</span>
                ) : (
                    <input
                        type="text"
                        placeholder="School"
                        value={values.school}
                        onChange={(e) => setValues({ ...values, school: e.target.value })}
                    />
                )}
            </div>
            <div>
                {isSubmitted ? (
                    <span>{values.school}</span>
                ) : (
                    <input
                        type="text"
                        placeholder="Title of study"
                        value={values.titleOfStudy}
                        onChange={(e) => setValues({ ...values, titleOfStudy: e.target.value })}
                    />
                )}
            </div>
        </div>
    );
}

export default EducationPiece;
