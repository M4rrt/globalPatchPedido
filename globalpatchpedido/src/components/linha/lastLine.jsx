import { useEffect, useState } from "react";

const lineDefaults = {
  id: 4,
  produto: "",
  produto_name: "",
  tamanho: "",
  especificacao: "Total de Itens",
  quantidade: 0,
  precoBruto: false,
  montante: 0,
  classNames: ["backgroud-green bottom-left-border-radius", "backgroud-green", "bgsg border-top-white", "bgsg border-top-white", "bgsg", "bgsg border-top-white bottom-right-border-radius"],
};

const LastLine = ({
  linhas,
  addLine,
}) => {
  const [summary, setSummary] = useState(lineDefaults)

  useEffect(() => {
    setSummary(prevSummary => ({
      ...prevSummary,
      quantidade: linhas
        .reduce((cont, linha) => cont + linha.quantidade, 0),
      montante: linhas
        .reduce((cont, linha) => cont + linha.montante, 0)
    }))
  }, [linhas])

  return (
    <div className={`linha`}>
      <div className={`celula ${summary.classNames[0]} bold produto`}>
        {
          summary.produto
        }
      </div>
      <div className={`celula ${summary.classNames[1]}`}>
        {
          summary.tamanho
        }
      </div>
      <div className={`celula ${summary.classNames[2]}`}>
        {
          summary.especificacao
        }
      </div>
      <div className={`celula ${summary.classNames[3]}`}>
        {
          summary.quantidade
        }
      </div>
      <div className={`celula ${summary.classNames[4]}`}>
        {

        }
      </div>
      <div className={`celula ${summary.classNames[5]}`}>
        {
          summary.montante.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        }
        <button >
          <svg onClick={addLine} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-plus-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default LastLine;
