import React from 'react';

export default function FlashCard(props) {
    const [hidden, setHidden] = React.useState(0)
    const { coverText, question, answer } = props;

    function hiddenClass() {
        switch (hidden) {
            case 0: return ''
            case 1: return 'hidden'
            case 2: return 'hidden'
            case 3: return "crossed red"
            case 4: return "crossed orange"
            case 5: return "crossed green"
            default: return ""
        }
    }

    function srcVector() {
        switch (hidden) {
            case 3: return "./assets/WrongVector.svg"
            case 4: return "./assets/MaybeVector.svg"
            case 5: return "./assets/CorrectVector.svg"
            default: return "./assets/Play.svg"
        }
    }

    const classFlashCover = `flash-card-cover ${hiddenClass()}`
    const classFlashQuestion = `flash-card-open ${hidden === 1 ? "" : "hidden"}`
    const classFlashAnswer = `flash-card-open ${hidden === 2 ? "" : "hidden"}`

    return (
        <article className="flash-card-container">
            <div className={classFlashCover}>
                <h2>{coverText}</h2>
                <img src={srcVector()} alt="" onClick={() => setHidden(1)} />
            </div>

            <div className={classFlashQuestion}>
                <p>{question}</p>
                <img onClick={() => setHidden(2)} src="./assets/Turn.svg" alt="" />
            </div>

            <div className={classFlashAnswer}>
                <p>{answer}</p>
                <div className="flash-card-buttons">
                    <button onClick={() => {
                        setHidden(3)
                    }} className="wrong">Não lembrei</button>
                    <button onClick={() => {
                        setHidden(4)
                    }} className="remember">Quase não lembrei</button>
                    <button onClick={() => {
                        setHidden(5)
                    }} className="zap">Zap!</button>
                </div>
            </div>

        </article>
    )
}