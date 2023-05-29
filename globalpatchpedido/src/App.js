import logo from './logo.svg';
import './App.css';
import Linha from "./components/linha/linha.component.jsx"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
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
