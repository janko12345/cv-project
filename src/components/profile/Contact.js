import ContactPiece from "./ContactPiece";
import InfoHeader from "./InfoHeader";
function Contact() {
    return (
        <div className="profile-section">
            <InfoHeader name="Contact" />
            <ContactPiece name="address" />
            <ContactPiece name="phone" type="tel" />
            <ContactPiece name="email" type="email" />
        </div>
    );
}

export default Contact;
