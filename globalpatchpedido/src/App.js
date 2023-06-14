import { useState } from 'react';
import './App.css';
import Tabela from "./components/tabela/tabela.component.jsx"
import jsonData from './valores.json';
const App = () => {
  let tipoTabela = "lucroPresumido";
  let faixaPreco = "A"




  const [tabela, setTabela] = useState([
    {
      id: 0,
      produto: "",
      tamanho: "P",
      especificacao: "50 x 50",
      quantidade: 0,
      precoBruto: jsonData[tipoTabela].colchonete[faixaPreco].P,
      montante: 0,
      classNames: ["backgroud-green top-left-border-radius", "backgroud-green", "backgroud-green", "backgroud-green-2", "bgsg", "bgsg top-right-border-radius"],
      lastline: false,
    },
    {
      id: 1,
      produto: "Acaochego",
      tamanho: "M",
      especificacao: "60 x 70",
      quantidade: 0,
      precoBruto: jsonData[tipoTabela].colchonete[faixaPreco].M,
      montante: 0,
      classNames: ["backgroud-green", "backgroud-green", "backgroud-green", "backgroud-green-2", "bgsg", "bgsg"],
      lastline: false,
    },
    {
      id: 2,
      produto: "Colchonete",
      tamanho: "G",
      especificacao: "70 x 80",
      quantidade: 0,
      precoBruto: jsonData[tipoTabela].colchonete[faixaPreco].G,
      montante: 0,
      classNames: ["backgroud-green", "backgroud-green", "backgroud-green", "backgroud-green-2", "bgsg", "bgsg"],
      lastline: false,
    },
    {
      id: 3,
      produto: "Standard",
      tamanho: "GG",
      especificacao: "90 x 110",
      quantidade: 0,
      precoBruto: jsonData[tipoTabela].colchonete[faixaPreco].GG,
      montante: 0,
      classNames: ["backgroud-green", "backgroud-green", "backgroud-green", "backgroud-green-2", "bgsg", "bgsg"],
      lastline: false,
    },
    {
      id: 4,
      produto: "",
      tamanho: "",
      especificacao: "Total de Itens",
      quantidade: 0,
      precoBruto: false,
      montante: 0,
      classNames: ["backgroud-green bottom-left-border-radius", "backgroud-green", "bgsg border-top-white", "bgsg border-top-white", "bgsg", "bgsg border-top-white bottom-right-border-radius"],
      lastline: true,
    }
  ])
  const [tabela2, setTabela2] = useState([
    {
      id: 0,
      produto: "",
      tamanho: "P",
      especificacao: "50 x 50",
      quantidade: 0,
      precoBruto: jsonData[tipoTabela].colchonete[faixaPreco].P,
      montante: 0,
      classNames: ["backgroud-green top-left-border-radius", "backgroud-green", "backgroud-green", "backgroud-green-2", "bgsg", "bgsg top-right-border-radius"],
      lastline: false,
    },
    {
      id: 1,
      produto: "Acaochego",
      tamanho: "M",
      especificacao: "60 x 70",
      quantidade: 0,
      precoBruto: jsonData[tipoTabela].colchonete[faixaPreco].M,
      montante: 0,
      classNames: ["backgroud-green", "backgroud-green", "backgroud-green", "backgroud-green-2", "bgsg", "bgsg"],
      lastline: false,
    },
    {
      id: 2,
      produto: "Colchonete",
      tamanho: "G",
      especificacao: "70 x 80",
      quantidade: 0,
      precoBruto: jsonData[tipoTabela].colchonete[faixaPreco].G,
      montante: 0,
      classNames: ["backgroud-green", "backgroud-green", "backgroud-green", "backgroud-green-2", "bgsg", "bgsg"],
      lastline: false,
    },
    {
      id: 3,
      produto: "Standard",
      tamanho: "GG",
      especificacao: "90 x 110",
      quantidade: 0,
      precoBruto: jsonData[tipoTabela].colchonete[faixaPreco].GG,
      montante: 0,
      classNames: ["backgroud-green", "backgroud-green", "backgroud-green", "backgroud-green-2", "bgsg", "bgsg"],
      lastline: false,
    },
    {
      id: 4,
      produto: "",
      tamanho: "",
      especificacao: "Total de Itens",
      quantidade: 0,
      precoBruto: false,
      montante: 0,
      classNames: ["backgroud-green bottom-left-border-radius", "backgroud-green", "bgsg border-top-white", "bgsg border-top-white", "bgsg", "bgsg border-top-white bottom-right-border-radius"],
      lastline: true,
    }
  ])



  const alterLinha = (event, updateFunction) => {
    updateFunction(prevTabela => prevTabela.map(linha => {
      const { precoBruto } = linha;
      let index = parseInt(event.target.id);
      const newQnt = parseInt((event.target.value !== '' && event.target.value > -1) ? event.target.value : 0)
      if (linha.id === index) {
        let newLinha = {
          quantidade: newQnt,
          montante: (precoBruto * newQnt),
        }
        return { ...linha, ...newLinha };
      }
      return linha;
    }));
    // altera a <lastline></lastline>
    updateFunction(prevTabela => prevTabela.map(linha => {
      if (linha.lastline === true) {
        let newlastline = {
          quantidade: prevTabela.map(linha => { const qnt = linha.lastline ? 0 : linha.quantidade; return qnt }).reduce((cont, value) => cont += value, 0),
          montante: prevTabela.map(linha => { const mont = linha.lastline ? 0 : linha.montante; return mont }).reduce((cont, value) => cont += value, 0),
        }
        return { ...linha, ...newlastline }
      }
      return linha
    })
    );

  }

  const alterLinhaTabela = (event) => {
    alterLinha(event, setTabela);
  }

  const alterLinhaTabela2 = (event) => {
    alterLinha(event, setTabela2);
  }







  return (
    <div className="App">
      <header className="App-header">
        {/* tem que transformar isso aqui é um componente ainda */}
        <Tabela linhas={tabela} onQntChangeHandler={alterLinhaTabela} key={1} />
        <Tabela linhas={tabela2} onQntChangeHandler={alterLinhaTabela2} key={2} />
      </header>
    </div>
  );
}

export default App;
