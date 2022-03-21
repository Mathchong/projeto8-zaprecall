import React from 'react';
import ReactDOM from "react-dom";
//import StartScreen from "./StartScreen";
import Header from "./Header";
import FlashCard from "./FlashCard";
import Footer from "./Footer"

const questions = [
    { coverText: "Pergunta 1", questionText: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
    { coverText: "Pergunta 2", questionText: "O React é __ ", answer: "uma biblioteca JavaScript para construção de interfaces"},
    { coverText: "Pergunta 3", questionText: "Componentes devem iniciar com __ ", answer: "letra maiúscula"},
    { coverText: "Pergunta 4", questionText: "Podemos colocar __ dentro do JSX", answer: "expressões"},
    { coverText: "Pergunta 5", questionText: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma"},
    { coverText: "Pergunta 6", questionText: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências"},
    { coverText: "Pergunta 7", questionText: "Usamos props para __", answer: "passar diferentes informações para componentes "},
    { coverText: "Pergunta 8", questionText: "Usamos estado (state) para __ ", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},
]

function App() {
    const[answered, setAnswered] = React.useState([])

    return (
        //<StartScreen />
        <>
            <Header />
            {questions.map(question => <FlashCard
                coverText={question.coverText}
                question={question.questionText}
                answer={question.answer}
                //callback={(svg) => setAnswered(answered.push(svg))}
                
                />)}
            <Footer number={questions} //done={answered} 
            />
        </>
    )
}

const app = App();
const elemento = document.querySelector(".root")
ReactDOM.render(app, elemento);