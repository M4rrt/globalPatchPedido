import './App.css';
import Linha from "./components/linha/linha.component.jsx"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Linha  
          classNames={["bgg","bgg","bgg","bgg2","bgsg","bgsg"]} 
          produto=""
          tamanho="P"
          especificacao="50x50"
          precoBruto={33.07}
          montante="ainda não sei como fazer isso"
          quantidade="  0"
        />
      </header>
    </div>
  );
}

export default App;
