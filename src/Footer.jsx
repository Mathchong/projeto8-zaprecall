export default function Footer(props){
    let number = [...props.number]
    number = number.length

    return (
        <footer>
            <p>0/{number} CONCLUÍDOS</p>
        </footer>
    )
}