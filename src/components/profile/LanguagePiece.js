function LanguagePiece() {
    return (
        <div
            className="language-piece"
            onClick={() => console.log("clicked language piece")}
        >
            <input type="text" placeholder="name" />
            <span>-</span>
            <input type="text" placeholder="level" />
        </div>
    );
}

export default LanguagePiece;
