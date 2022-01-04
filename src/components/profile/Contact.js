import ContactPiece from "./ContactPiece";
import InfoHeader from "./InfoHeader";
function Contact({ isSubmitted }) {
    return (
        <div className="profile-section">
            <InfoHeader name="Contact" />
            <ContactPiece isSubmitted={isSubmitted} name="address" />
            <ContactPiece isSubmitted={isSubmitted} name="phone" type="tel" />
            <ContactPiece isSubmitted={isSubmitted} name="email" type="email" />
        </div>
    );
}

export default Contact;
