import { useEffect, useState } from 'react';
import './App.css';
import Tabela from "./components/tabela/tabela.component.jsx"
import jsonData from './valores.json';
const App = () => {
  let tipoTabela = "lucroPresumido";
  let faixaPreco = "A"
  const [tabela1, setTabela1] = useState([
      {
        id: 0,
        produto: "",
        tamanho: "P",
        especificacao: "50 x 50",
        quantidade: 0,
        precoBruto: jsonData[tipoTabela].colchonete[faixaPreco].P,
        montante: 0,
        classNames: ["backgroud-green top-left-border-radius", "backgroud-green", "backgroud-green", "backgroud-green-2", "bgsg", "bgsg top-right-border-radius"],
        lastline : false
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
        lastline : false,
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
        lastline : false,
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
        lastline : false,
      },
      {
        id: 4,
        produto: "",
        tamanho: "",
        especificacao: "Total de Itens",
        quantidade: 0,
        precoBruto: "",
        montante: 0,
        classNames: ["backgroud-green bottom-left-border-radius", "backgroud-green", "bgsg border-top-white", "bgsg border-top-white", "bgsg", "bgsg border-top-white bottom-right-border-radius"],
        lastline : true,
      }
    ]);

  const onQntChange = (event)=> {
    console.log(event.target.id)
  }

  const onFocusClear = (event)=> {
    event.target.value=0
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* tem que transformar isso aqui é um componente ainda */}
        <Tabela linhas={tabela1} onQntChangeHandler={onQntChange} onFocusHandler={onFocusClear} key={1} />
      </header>
    </div>
  );
}

export default App;
