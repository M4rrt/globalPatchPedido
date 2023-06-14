import { useState } from 'react';
import './App.css';
import Tabela from "./components/tabela/tabela.component.jsx"
import jsonData from './tabelaPrecos.json';
const App = () => {

  const [faixaPreco, setPreco] = useState("A")
  const [tipoTabela, setTipoTabela] = useState("lucroPresumido")




  const [tabela, setTabela] = useState({
    produto: "colchonete",
    linhas: [
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
      }]
  })
  const [tabela2, setTabela2] = useState({
    produto: "colchonete",
    linhas: [
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
      }]
  })
  const [tabela3, setTabela3] = useState({
    produto: "colchonete",
    linhas: [
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
      }]
  })



  const alterLinha = (event, updateFunction) => {

    updateFunction(prevTabela => {
      const newLinhas = prevTabela.linhas.map(linha => {
        const { precoBruto } = linha;
        let index = parseInt(event.target.id);
        const newQnt = parseInt(Math.max(event.target.value, 0) || 0);
        if (linha.id === index) {
          let newLinha = {
            quantidade: newQnt,
            montante: (precoBruto * newQnt)
          }
          return { ...linha, ...newLinha }
        }
        return linha
      });
      const newTabela = { ...prevTabela, linhas: newLinhas }
      return newTabela
    });

    // altera a <lastline></lastline>
    updateFunction(prevTabela => {
      const { linhas } = prevTabela;
      const newLinhas = linhas.map(linha => {
        if (linha.lastline === true) {
          const newlastline = {
            quantidade: linhas
              .filter(linha => !linha.lastline)
              .reduce((cont, linha) => cont + linha.quantidade, 0),
            montante: linhas
              .filter(linha => !linha.lastline)
              .reduce((cont, linha) => cont + linha.montante, 0)
          }
          return { ...linha, ...newlastline }
        }
        return linha;
      });
      const newTabela = { ...prevTabela, linhas: newLinhas };
      return newTabela
    })
  }

  const alterLinhaTabela = (event) => {
    alterLinha(event, setTabela);
  }

  const alterLinhaTabela2 = (event) => {
    alterLinha(event, setTabela2);
  }

  const alterLinhaTabela3 = (event) => {
    alterLinha(event, setTabela3);
  }







  return (
    <div className="App">
      <header className="App-header">
        <Tabela linhas={tabela.linhas} onQntChangeHandler={alterLinhaTabela} key={1} />
        <Tabela linhas={tabela2.linhas} onQntChangeHandler={alterLinhaTabela2} key={2} />
        <Tabela linhas={tabela3.linhas} onQntChangeHandler={alterLinhaTabela3} key={3} />
      </header>
    </div>
  );
}

export default App;
