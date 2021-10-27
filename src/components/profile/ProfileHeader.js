function ProfileHeader() {
    return (
        <div className="profile-section">
            <div className="fullname">
                <input type="text" name="fullname" placeholder="full name" />
            </div>
            <div className="profile-picture"></div>
        </div>
    );
}

export default ProfileHeader;
