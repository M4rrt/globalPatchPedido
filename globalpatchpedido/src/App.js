import { Component } from 'react';
import './App.css';
import Linha from "./components/linha/linha.component.jsx"

class App extends Component {
  constructor() {
    super();

    this.state = {
      tabelas: [
        {
          linhas: [
            {
              produto : "",
              tamanho : "P", 
              especificacao: "50x50", 
              quantidade:  0, 
              precoBruto : 33.07, 
              montante : 0,
              classNames : ["bgg","bgg","bgg2","bgg2","bgsg","bgsg"]
            },
            {
              produto : "",
              tamanho : "M", 
              especificacao: "50x50", 
              quantidade:  0, 
              precoBruto : 33.07, 
              montante : 0,
              classNames : []
            },
            {
              produto : "",
              tamanho : "G", 
              especificacao: "50x50", 
              quantidade:  0, 
              precoBruto : 33.07, 
              montante : 0,
              classNames : []
            },
            {
              produto : "",
              tamanho : "GG", 
              especificacao: "50x50", 
              quantidade:  0, 
              precoBruto : 33.07, 
              montante : 0,
              classNames : []
            },
            {
              produto : "",
              tamanho : "P", 
              especificacao: "Total de itens", 
              quantidade:  0, 
              precoBruto : 33.07, 
              montante : 0,
              classNames : []
            },
          ]
        },
        {

        },
      ]
  }
}

render() {
  const row  = this.state.tabelas[0].linhas[0]
  return (
    <div className="App">
      <header className="App-header">
        <Linha
          classNames={row.classNames}
          produto={row.produto}
          tamanho={row.tamanho}
          especificacao={row.especificacao}
          precoBruto={row.precoBruto}
          montante={row.montante}
          quantidade={row.quantidade}
        />
      </header>
    </div>
  );
} 
}

export default App;
