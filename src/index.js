import ReactDOM from "react-dom";
import StartScreen from "./StartScreen";

function App(){
    return(
        <StartScreen />
    )
}

const app = App();
const elemento = document.querySelector(".root")
ReactDOM.render(app, elemento);