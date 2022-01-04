import { useState } from "react";
import DatePair from "../universal/DatePair";

function ExperiencePiece() {
    const [values, setValues] = useState({
        date: { from: "", to: "" },
        company: "",
        positionTitle: "",
    });
    return (
        <div>
            <div className="experience-piece">
                <DatePair />
                <div>
                    <input
                        type="text"
                        placeholder="Company"
                        value={values.company}
                        onChange={(e) =>
                            setValues({
                                ...values,
                                company: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Position title"
                        value={values.positionTitle}
                        onChange={(e) =>
                            setValues({
                                ...values,
                                positionTitle: e.target.value,
                            })
                        }
                    />
                </div>
                <textarea cols="30" rows="3" placeholder={"task 1;\ntask 2;\n..."}></textarea>
            </div>
        </div>
    );
}

export default ExperiencePiece;
