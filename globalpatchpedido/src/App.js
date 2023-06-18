import { useEffect, useState } from 'react';
import './App.css';
import Tabela from "./components/tabela/tabela.component.jsx"
import jsonData from './tabelaPrecos.json';
const App = () => {

  const [faixaPreco, setPreco] = useState("A");
  const [tipoTabela, setTipoTabela] = useState("lucroPresumido");
  const [tabelaHandler,setTabelaHandler] = useState();
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

  useEffect(() => {
    console.log("effect")
    setTabela(prevTabela => prevTabela.map(linha => {
      if (linha.lastline === true) {
        const newLastLine = {
          quantidade: prevTabela
            .filter(linha => !linha.lastline)
            .reduce((cont, linha) => cont + linha.quantidade, 0),
          montante: prevTabela
            .filter(linha => !linha.lastline)
            .reduce((cont, linha) => cont + linha.montante, 0)
        }
        return { ...linha, ...newLastLine }
      }
      return { ...linha }
    })
    )
  }, [tabelaHandler])


  const removeLinha = (event) => {
    console.log(event.target)
    const target = event.target.value
    console.log(target)
    setTabela(prevTabela => {
      const tab =  prevTabela.filter(linha => linha.id != target);
      return tab
    }
    )
    setTabelaHandler(tabela)
  } 

  const alterLinha = (event, updateFunction) => {
    updateFunction(prevTabela => prevTabela.map(linha => {
      const { precoBruto } = linha;
      let index = parseInt(event.target.id);
      const newQnt = parseInt(Math.max(event.target.value, 0) || 0);
      if (linha.id === index) {
        let newLinha = {
          quantidade: newQnt,
          montante: (precoBruto * newQnt),
        }
        return { ...linha, ...newLinha };
      }
      return linha;
    }));
    setTabelaHandler(tabela)
  }

  const alterLinhaTabela = (event) => {
    alterLinha(event, setTabela);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Tabela linhas={tabela} onQntChangeHandler={alterLinhaTabela} removeLine={removeLinha} key={1} />
      </header>
    </div>
  );
}

export default App;
