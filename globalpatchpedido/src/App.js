import { useEffect, useState } from 'react';
import './App.css';
import Tabela from "./components/tabela/tabela.component.jsx"
import jsonData from './tabelaPrecos.json';
const App = () => {

  const [faixaPreco, setFaixaPreco] = useState("A");
  const [tipoTabela, setTipoTabela] = useState("lucroPresumido");
  const [representante, setRepresentante] = useState('');
  const [prazoPagamento, setPrazoPagamento] = useState('');
  const [frete, setFrete] = useState('');
  const [nomeCliente, setNomeCliente] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [observacao, setObservasao] = useState('');
  const [email, setEmail] = useState('');
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

  useEffect(() => {
    setTabela(prevTabela => {
      const newTabela = prevTabela
        .filter(linha => !linha.lastline).map(linha => {
          return { ...linha, ...{ precoBruto: jsonData[tipoTabela][linha.produto][faixaPreco][linha.tamanho] } }
        })
      const lastline = prevTabela
        .filter(linha => linha.lastline);
      return [...newTabela, ...lastline]
    })
  }, [tipoTabela, faixaPreco])


  const addLinha = (event) => {

    setTabela(prevTabela => {
      const prevLines = prevTabela
        .filter(linha => !linha.lastline)
      const lastline = prevTabela
        .filter(linha => linha.lastline)
      const newId = prevTabela
        .reduce((cont, linha) => linha.id >= cont ? linha.id + 1 : cont, 0)
      const newTabela = {
        id: newId,
        produto: "colchonete",
        tamanho: "P",
        especificacao: jsonData[tipoTabela].colchonete["caracteristica"].P,
        quantidade: 0,
        precoBruto: jsonData[tipoTabela].colchonete[faixaPreco].P,
        montante: 0,
        classNames: ["backgroud-green", "backgroud-green", "backgroud-green", "backgroud-green-2", "bgsg", "bgsg"],
        lastline: false,
      }
      return [...prevLines, { ...newTabela }, ...lastline]
    }
    )
  }

  const removeLinha = (event, index) => {
    setTabela(prevTabela => {
      const tab = prevTabela.filter(linha => linha.id != index);
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

  const changeProduto = (event, index) => {
    const produto = event.target.value;
    const precoBruto = jsonData[tipoTabela][produto][faixaPreco]["P"];
    setTabela(prevTabela => prevTabela.map(linha => {
      if (linha.id === index) {
        return { ...linha, ...{ produto: produto, especificacao: jsonData[tipoTabela][produto]["caracteristica"]["P"], precoBruto, tamanho: "P", montante: linha.quantidade * precoBruto } }
      }
      return linha
    }))

    setTabelaHandler(tabela)
  }

  const changeTamanho = (event, index) => {
    const tam = event.target.value;
    setTabela(prevTabela => prevTabela.map(linha => {
      if (linha.id === index) {
        return { ...linha, ...{ precoBruto: jsonData[tipoTabela][linha.produto][faixaPreco][tam], tamanho: tam }, especificacao: jsonData[tipoTabela][linha.produto]["caracteristica"][tam] }
      }
      return linha
    }))
    setTabelaHandler(tabela)
  }


  const envioHandler = (table) => {
    console.log("Enviado")
    console.log({Produtos:table, infos:{faixaPreco,tipoTabela,representante,prazoPagamento,frete,nomeCliente,cnpj,observacao,email}})
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className="flex w-80">
          <div className="col-6">
            <label htmlFor="representante">Representante:</label>
            <input
              className="input-under"
              type="text"
              id="representante"
              placeholder="representante"
              value={representante}
              onChange={(e) => setRepresentante(e.target.value)}
            />
          </div>

          <div className="col-6">
            <label htmlFor="tabelaPreco">Tabela de Preço:</label>
            <select
              className="input-under"
              id="tabelaPreco"
              value={faixaPreco}
              onChange={(e) => setFaixaPreco(e.target.value)}
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
          </div>

          <div className="col-6">
            <label htmlFor="prazoPagamento">Prazo de Pagamento:</label>
            <input
              className="input-under"
              type="text"
              id="prazoPagamento"
              placeholder="prazo de pagamento"
              value={prazoPagamento}
              onChange={(e) => setPrazoPagamento(e.target.value)}
            />
          </div >
          <div className="col-6">
            <label htmlFor="frete">Frete:</label>
            <input
              className="input-under"
              type="text"
              id="frete"
              placeholder="frete"
              value={frete}
              onChange={(e) => setFrete(e.target.value)}
            />
          </div>
        </div>
        <div className='w-80'>
          <label htmlFor="tipoTabela">Proposta Comercial</label>
          <select className="input-under" value={tipoTabela} onChange={(event) => { setTipoTabela(event.target.value) }}>
            <option value="lucroPresumido">Lucro Presumido</option>
            <option value="simplesNacional">Simples Nacional</option>
          </select>
        </div>
        <div className="flex w-80">
          <div className='col-6'>
            <label htmlFor="nomeCliente">Nome do Cliente:</label>
            <input
              className="input-under"
              type="text"
              id="nomeCliente"
              placeholder="nome do cliente"
              value={nomeCliente}
              onChange={(e) => setNomeCliente(e.target.value)}
            />
          </div>
          <div className='col-6'>
            <label htmlFor="cnpj">CNPJ:</label>
            <input
              className="input-under"
              type="text"
              id="cnpj"
              placeholder="CNPJ do cliente"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
            />
          </div>
        </div>


        <Tabela linhas={tabela} onQntChangeHandler={alterLinhaTabela} removeLine={removeLinha} addLine={addLinha} onChangeProduto={changeProduto} onChangeTamanho={changeTamanho} key={1} />

        <div className='w-80'>
          <label htmlFor="observacao">Observações:</label>
          <input
            className="input-under"
            type="text"
            id="observacao"
            placeholder="Observações"
            value={observacao}
            onChange={(e) => setObservasao(e.target.value)}
          />
        </div>

        <div className='w-80'>
          <label htmlFor="Email">Email:</label>
          <input
            className="input-under"
            type="text"
            id="email"
            placeholder="E-mail do Cliente"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button className="btn-enviar" onClick={() => envioHandler(tabela)}>Enviar</button>
        </div>
      </header>
    </div>
  );
}

export default App;