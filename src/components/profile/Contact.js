import ContactPiece from "./ContactPiece";
import InfoHeader from "./InfoHeader";
function Contact() {
    return (
        <div>
            <div className="profile-section">
                <InfoHeader name="contact" />
                <ContactPiece name="address" />
                <ContactPiece name="phone" type="tel" />
                <ContactPiece name="email" type="email" />
            </div>
        </div>
    );
}

export default Contact;
