import { Component } from 'react';
import './App.css';
import Tabela from "./components/tabela/tabela.component.jsx"
import jsonData from './valores.json';
class App extends Component {
  constructor() {
    super();
    
    let tipoTabela = "lucroPresumido";
    let faixaPreco = "A"
    this.state = {

      tabelas: [
        {
          linhas: [
            {
              produto : "",
              tamanho : "P", 
              especificacao: "50 x 50", 
              quantidade:  0, 
              precoBruto : jsonData[tipoTabela].colchonete[faixaPreco].P, 
              montante : 0,
              classNames : ["backgroud-green top-left-border-radius","backgroud-green","backgroud-green-2","backgroud-green-2","bgsg","bgsg"],
            },
            {
              produto : "Acaochego",
              tamanho : "M", 
              especificacao: "60 x 70", 
              quantidade:  0, 
              precoBruto : jsonData[tipoTabela].colchonete[faixaPreco].M, 
              montante : 0,
              classNames : ["backgroud-green","backgroud-green","backgroud-green-2","backgroud-green-2","bgsg","bgsg"]
            },
            {
              produto : "Colchonete",
              tamanho : "G", 
              especificacao: "70 x 80", 
              quantidade:  0, 
              precoBruto : jsonData[tipoTabela].colchonete[faixaPreco].G, 
              montante : 0,
              classNames : ["backgroud-green","backgroud-green","backgroud-green-2","backgroud-green-2","bgsg","bgsg"]
            },
            {
              produto : "Standard",
              tamanho : "GG", 
              especificacao: "90 x 110", 
              quantidade:  0, 
              precoBruto : jsonData[tipoTabela].colchonete[faixaPreco].G, 
              montante : 0,
              classNames : ["backgroud-green","backgroud-green","backgroud-green-2","backgroud-green-2","bgsg","bgsg"]
            }
          ]
        },
        {

        },
      ]
  }
}

render() {
  const linhas  = this.state.tabelas[0].linhas
  return (
    <div className="App">
      <header className="App-header">

        {
          <Tabela linhas={linhas} /> 
        }
      </header>
    </div>
  );
} 
}

export default App;
