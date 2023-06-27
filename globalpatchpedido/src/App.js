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
    },
  ])

  useEffect(() => {
    setTabela(prevTabela => {
      const newTabela = prevTabela
        .map(linha => {
          return { ...linha, ...{ precoBruto: jsonData[tipoTabela][linha.produto][faixaPreco][linha.tamanho] } }
        })
      const lastline = prevTabela
        .filter(linha => linha.lastline);
      return [...newTabela, ...lastline]
    })
  }, [tipoTabela, faixaPreco])

  const envioHandler = (table) => {
    console.log("Enviado")
    console.log({ Produtos: table, infos: { faixaPreco, tipoTabela, representante, prazoPagamento, frete, nomeCliente, cnpj, observacao, email } })
    setTimeout(() => {
      alert('enviado');
    }, 2000)
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

        <Tabela
          linhas={tabela}
          setTabela={setTabela}
          faixaPreco={faixaPreco}
          tipoTabela={tipoTabela}
          key={1}
        />

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
