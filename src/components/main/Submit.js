function Submit({ isSubmitted, handleSubmit }) {
    return (
        <div className="submit" onClick={handleSubmit}>
            <button className="submit-btn">{isSubmitted ? "EDIT" : "SUBMIT"}</button>
        </div>
    );
}

export default Submit;
