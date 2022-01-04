import Contact from "./profile/Contact";
import Languages from "./profile/Languages";
import Hobbies from "./profile/Hobbies";
import ProfileHeader from "./profile/ProfileHeader";
function Sidebar({ isSubmitted }) {
    return (
        <div className="sidebar">
            <div className="profile-cnt">
                <ProfileHeader isSubmitted={isSubmitted} />
                <Contact isSubmitted={isSubmitted} />
                <Languages isSubmitted={isSubmitted} />
                <Hobbies isSubmitted={isSubmitted} />
            </div>
        </div>
    );
}

export default Sidebar;
