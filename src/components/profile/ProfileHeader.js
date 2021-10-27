function ProfileHeader() {
    return (
        <div className="profile-section">
            <div className="fullname">
                <input type="text" name="fullname" placeholder="full name" />
            </div>
            <img className="user-pic" src="/user.png" alt="user picture" />
        </div>
    );
}

export default ProfileHeader;
