import { useState } from "react";
import DatePair from "../universal/DatePair";

function ExperiencePiece({ isSubmitted }) {
    const [values, setValues] = useState({
        date: { from: "", to: "" },
        company: "",
        positionTitle: "",
        tasks: "",
    });
    return (
        <div>
            <div className="experience-piece">
                <DatePair isSubmitted={isSubmitted} />
                <div>
                    {isSubmitted ? (
                        <span>{values.company}</span>
                    ) : (
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
                    )}
                </div>
                <div>
                    {isSubmitted ? (
                        <span>{values.positionTitle}</span>
                    ) : (
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
                    )}
                </div>
                <div className="job-tasks">
                    {isSubmitted ? (
                        <ul>{values.tasks.split("\n").map((task) => (task ? <li>{task}</li> : ""))}</ul>
                    ) : (
                        <textarea
                            cols="30"
                            rows="3"
                            value={values.tasks}
                            onChange={(e) => setValues({ ...values, tasks: e.target.value })}
                            placeholder={"task 1\ntask 2\n..."}
                        ></textarea>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ExperiencePiece;
