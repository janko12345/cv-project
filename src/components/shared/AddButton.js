function AddButton(props) {
    return (
        <div>
            <button
                onClick={() =>
                    props.setNumberOfPieces((prevCount) => prevCount + 1)
                }
            >
                add
            </button>
        </div>
    );
}

export default AddButton;
