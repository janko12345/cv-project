import ContactPiece from "./ContactPiece";
import InfoHeader from "./InfoHeader";
function Contact() {
    return (
        <div>
            <div className="profile-section">
                <InfoHeader name="contact" />
                <ContactPiece />
                <ContactPiece />
                <ContactPiece />
            </div>
        </div>
    );
}

export default Contact;
