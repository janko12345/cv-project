import Contact from "./profile/Contact";
import Languages from "./profile/Languages";
import Hobbies from "./profile/Hobbies";
import ProfileHeader from "./profile/ProfileHeader";
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="profile-cnt">
                <ProfileHeader />
                <Contact />
                <Languages />
                <Hobbies />
            </div>
        </div>
    );
}

export default Sidebar;
