import { useEffect, useState } from 'react';
import './App.css';
import Tabela from "./components/tabela/tabela.component.jsx"
import jsonData from './tabelaPrecos.json';
const App = () => {

  const [faixaPreco, setPreco] = useState("A");
  const [tipoTabela, setTipoTabela] = useState("lucroPresumido");
  const [tabelaHandler, setTabelaHandler] = useState();
  const [tabela, setTabela] = useState([
    {
      id: 0,
      produto: "colchonete",
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
      produto: "caminha_P",
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
      produto: "colchonete",
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
      produto: "colchonete",
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
      produto_name: "",
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


  // ainda não tá funcionando 
  const addLinha = (event) => {
    setTabela(prevTabela =>{ 
      const prevLines = prevTabela
      .filter(linha => !linha.lastline)
      const lastline = prevTabela
        .filter(linha => linha.lastline)
      const newId = prevTabela
      .reduce((cont, linha) => linha.id >= cont ? linha.id + 1 : cont, 0)
      const newTabela = {
          id: newId,
          produto: "placeholder",
          tamanho: "placeholder",
          especificacao: "placeholder",
          quantidade: 0,
          precoBruto: jsonData[tipoTabela].colchonete[faixaPreco].GG,
          montante: 0,
          classNames: ["backgroud-green", "backgroud-green", "backgroud-green", "backgroud-green-2", "bgsg", "bgsg"],
          lastline: false,
      }
      return [...prevLines, {...newTabela}, ...lastline]
    }
    )
  }

  const removeLinha = (event) => {
    const target = event.target.value
    setTabela(prevTabela => {
      const tab = prevTabela.filter(linha => linha.id != target);
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
  }
  
  const alterLinhaTabela = (event) => {
    alterLinha(event, setTabela);
    setTabelaHandler(tabela)
  }

  const changeProduto = (event,index) => {
    const produto = event.target.value;
    const precoBruto = jsonData[tipoTabela][produto][faixaPreco]["P"];
    setTabela(prevTabela => prevTabela.map(linha => {
      if (linha.id === index) {
        return {...linha, ...{ produto : produto, precoBruto, tamanho : "P", montante: linha.quantidade *precoBruto } }
      }
      return linha
    }))
    setTabelaHandler(tabela)
  }

  const changeTamanho = (event, index) => {
    const tam = event.target.value;
    setTabela(prevTabela => prevTabela.map(linha => {
      if (linha.id === index) {
        return {...linha, ...{ precoBruto : jsonData[tipoTabela][linha.produto][faixaPreco][tam], tamanho: tam} }
      }
      return linha
    }))
    setTabelaHandler(tabela)
  }


  return (
    <div className="App">
      <header className="App-header">
        <Tabela linhas={tabela} onQntChangeHandler={alterLinhaTabela} removeLine={removeLinha} addLine={addLinha} onChangeProduto={changeProduto} onChangeTamanho={changeTamanho} key={1} />
      </header>
    </div>
  );
}

export default App;
