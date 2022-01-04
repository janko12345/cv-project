function AddButton({ isSubmitted, setNumberOfPieces }) {
    return isSubmitted ? "" : <div className="add-btn" onClick={() => setNumberOfPieces((prevCount) => prevCount + 1)}></div>;
}

export default AddButton;
