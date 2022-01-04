import { useState } from "react";
function ProfileHeader({ isSubmitted }) {
    const [value, setValue] = useState("");
    return (
        <div className="profile-section">
            <div className="fullname">
                {/* {isSubmitted ? } */}
                <input
                    type="text"
                    name="fullname"
                    placeholder="full name"
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                />
            </div>
            <img className="user-pic" src={process.env.PUBLIC_URL + "/user.png"} alt="user picture" />
        </div>
    );
}

export default ProfileHeader;
