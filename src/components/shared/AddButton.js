function AddButton(props) {
    return (
        <div
            className="add-btn"
            onClick={() =>
                props.setNumberOfPieces((prevCount) => prevCount + 1)
            }
        ></div>
    );
}

export default AddButton;
