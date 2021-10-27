function ExperiencePiece() {
    return (
        <div>
            <div>
                <div className="from-to-date">
                    <input type="date" />
                    -
                    <input type="date" />
                </div>
                <div>
                    <input type="text" placeholder="Company" />
                </div>
                <div>
                    <input type="text" placeholder="Position title" />
                </div>
            </div>
            <textarea
                cols="30"
                rows="10"
                placeholder={"task 1;\ntask 2;\n..."}
            ></textarea>
        </div>
    );
}

export default ExperiencePiece;
