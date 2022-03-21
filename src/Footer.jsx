export default function Footer(props){
    let number = [...props.number]
    number = number.length
    let done = props.done

    return (
        <footer>
            <p>0/{number} CONCLUÍDOS</p>
            {/* <div className="doneQuestions">
                {done.map(done => <img src="" alt=""/>)}
            </div> */}

        </footer>
    )
}