function EducationPiece() {
    return (
        <div>
            <div className="from-to-date">
                <input type="date" />
                -
                <input type="date" />
            </div>
            <div>
                <input type="text" placeholder="School" />
            </div>
            <div>
                <input type="text" placeholder="Title of study" />
            </div>
        </div>
    );
}

export default EducationPiece;
