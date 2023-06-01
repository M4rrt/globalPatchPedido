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
        [
            {
              produto : "",
              tamanho : "P", 
              especificacao: "50 x 50", 
              quantidade:  0, 
              precoBruto : jsonData[tipoTabela].colchonete[faixaPreco].P, 
              montante : 0,
              classNames : ["backgroud-green top-left-border-radius","backgroud-green","backgroud-green","backgroud-green-2","bgsg","bgsg top-right-border-radius"],
            },
            {
              produto : "Acaochego",
              tamanho : "M", 
              especificacao: "60 x 70", 
              quantidade:  0, 
              precoBruto : jsonData[tipoTabela].colchonete[faixaPreco].M, 
              montante : 0,
              classNames : ["backgroud-green","backgroud-green","backgroud-green","backgroud-green-2","bgsg","bgsg"]
            },
            {
              produto : "Colchonete",
              tamanho : "G", 
              especificacao: "70 x 80", 
              quantidade:  0, 
              precoBruto : jsonData[tipoTabela].colchonete[faixaPreco].G, 
              montante : 0,
              classNames : ["backgroud-green","backgroud-green","backgroud-green","backgroud-green-2","bgsg","bgsg"]
            },
            {
              produto : "Standard",
              tamanho : "GG", 
              especificacao: "90 x 110", 
              quantidade:  0, 
              precoBruto : jsonData[tipoTabela].colchonete[faixaPreco].G, 
              montante : 0,
              classNames : ["backgroud-green","backgroud-green","backgroud-green","backgroud-green-2","bgsg","bgsg"]
            },
            {
              produto : "",
              tamanho : "", 
              especificacao: "Total de Itens", 
              quantidade:  0, 
              precoBruto : "", 
              montante : 0,
              classNames : ["backgroud-green bottom-left-border-radius","backgroud-green","bgsg border-top-white","bgsg border-top-white","bgsg","bgsg border-top-white bottom-right-border-radius"]
            }
          ],
        [
            {
              produto : "",
              tamanho : "P", 
              especificacao: "50 x 50", 
              quantidade:  0, 
              precoBruto : jsonData[tipoTabela].colchonete[faixaPreco].P, 
              montante : 0,
              classNames : ["backgroud-green top-left-border-radius","backgroud-green","backgroud-green","backgroud-green-2","bgsg","bgsg top-right-border-radius"],
            },
            {
              produto : "Acaochego",
              tamanho : "M", 
              especificacao: "60 x 70", 
              quantidade:  0, 
              precoBruto : jsonData[tipoTabela].colchonete[faixaPreco].M, 
              montante : 0,
              classNames : ["backgroud-green","backgroud-green","backgroud-green","backgroud-green-2","bgsg","bgsg"]
            },
            {
              produto : "Colchonete",
              tamanho : "G", 
              especificacao: "70 x 80", 
              quantidade:  0, 
              precoBruto : jsonData[tipoTabela].colchonete[faixaPreco].G, 
              montante : 0,
              classNames : ["backgroud-green","backgroud-green","backgroud-green","backgroud-green-2","bgsg","bgsg"]
            },
            {
              produto : "Standard",
              tamanho : "GG", 
              especificacao: "90 x 110", 
              quantidade:  0, 
              precoBruto : jsonData[tipoTabela].colchonete[faixaPreco].G, 
              montante : 0,
              classNames : ["backgroud-green","backgroud-green","backgroud-green","backgroud-green-2","bgsg","bgsg"]
            },
            {
              produto : "",
              tamanho : "", 
              especificacao: "Total de Itens", 
              quantidade:  0, 
              precoBruto : "", 
              montante : 0,
              classNames : ["backgroud-green bottom-left-border-radius","backgroud-green","bgsg border-top-white","bgsg border-top-white","bgsg","bgsg border-top-white bottom-right-border-radius"]
            }
          ],
        [
            {
              produto : "",
              tamanho : "P", 
              especificacao: "50 x 50", 
              quantidade:  0, 
              precoBruto : jsonData[tipoTabela].colchonete[faixaPreco].P, 
              montante : 0,
              classNames : ["backgroud-green top-left-border-radius","backgroud-green","backgroud-green","backgroud-green-2","bgsg","bgsg top-right-border-radius"],
            },
            {
              produto : "Acaochego",
              tamanho : "M", 
              especificacao: "60 x 70", 
              quantidade:  0, 
              precoBruto : jsonData[tipoTabela].colchonete[faixaPreco].M, 
              montante : 0,
              classNames : ["backgroud-green","backgroud-green","backgroud-green","backgroud-green-2","bgsg","bgsg"]
            },
            {
              produto : "Colchonete",
              tamanho : "G", 
              especificacao: "70 x 80", 
              quantidade:  0, 
              precoBruto : jsonData[tipoTabela].colchonete[faixaPreco].G, 
              montante : 0,
              classNames : ["backgroud-green","backgroud-green","backgroud-green","backgroud-green-2","bgsg","bgsg"]
            },
            {
              produto : "Standard",
              tamanho : "GG", 
              especificacao: "90 x 110", 
              quantidade:  0, 
              precoBruto : jsonData[tipoTabela].colchonete[faixaPreco].G, 
              montante : 0,
              classNames : ["backgroud-green","backgroud-green","backgroud-green","backgroud-green-2","bgsg","bgsg"]
            },
            {
              produto : "",
              tamanho : "", 
              especificacao: "Total de Itens", 
              quantidade:  0, 
              precoBruto : "", 
              montante : 0,
              classNames : ["backgroud-green bottom-left-border-radius","backgroud-green","bgsg border-top-white","bgsg border-top-white","bgsg","bgsg border-top-white bottom-right-border-radius"]
            }
          ],
      ]
  }
}

render() {
  const tabela1  = this.state.tabelas[0]
  const tabela2  = this.state.tabelas[1]
  const tabela3  = this.state.tabelas[2]
  return (
    <div className="App">
      <header className="App-header">
          <Tabela linhas={tabela1} /> 
          <Tabela linhas={tabela2} /> 
          <Tabela linhas={tabela3} /> 
      </header>
    </div>
  );
} 
}

export default App;
