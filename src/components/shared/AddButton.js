function AddButton(props) {
    return (
        <div>
            <button
                onClick={() =>
                    props.setNumberOfPieces(
                        (prevCount) => (console.log(prevCount), prevCount + 1)
                    )
                }
            >
                add
            </button>
        </div>
    );
}

export default AddButton;
