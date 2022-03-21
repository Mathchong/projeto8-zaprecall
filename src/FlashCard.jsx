export default function FlashCard(props) {
    const {coverText, question, answer} = props;
    return (
        <article className="flash-card-container">
            <div className="flash-card-cover ">
                <h2>{coverText}</h2>
                <ion-icon name="play-outline"></ion-icon>
            </div>

            <div className="flash-card-open ">
                <p>{question}</p>
                <img src="./assets/Turn.svg" alt="" />
            </div>

            <div className="flash-card-open">
                <p>{answer}</p>
                <div className="flash-card-buttons">
                    <button className="wrong">Não lembrei</button>
                    <button className="remember">Quase não lembrei</button>
                    <button className="zap">Zap!</button>
                </div>
            </div>

        </article>
    )
}