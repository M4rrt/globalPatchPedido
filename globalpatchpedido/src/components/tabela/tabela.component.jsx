import LastLine from "../linha/lastLine";
import Linha from "../linha/linha.component";
import './tabela.css';
import jsonData from '../../tabelaPrecos.json';

const Tabela = ({ linhas, faixaPreco, tipoTabela, setTabela }) => {
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
            }
            return [...prevLines, { ...newTabela }, ...lastline]
        })
    }

    const removeLinha = (event, index) => {
        setTabela(prevTabela => {
            const tab = prevTabela.filter(linha => linha.id != index);
            return tab
        })
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
    }

    const changeProduto = (event, index) => {
        const produto = event.target.value;
        const precoBruto = jsonData[tipoTabela][produto][faixaPreco]["P"];
        setTabela(prevTabela => prevTabela.map(linha => {
            if (linha.id === index) {
                return {
                    ...linha,
                    produto: produto,
                    especificacao: jsonData[tipoTabela][produto]["caracteristica"]["P"],
                    precoBruto,
                    tamanho: "P",
                    montante: linha.quantidade * precoBruto,
                }
            }
            return linha
        }))

    }

    const changeTamanho = (event, index) => {
        const tam = event.target.value;
        setTabela(prevTabela => prevTabela.map(linha => {
            if (linha.id === index) {
                return {
                    ...linha,
                    precoBruto: jsonData[tipoTabela][linha.produto][faixaPreco][tam],
                    tamanho: tam,
                    especificacao: jsonData[tipoTabela][linha.produto]["caracteristica"][tam],
                }
            }
            return linha
        }))
    }

    return (
        <div className="tabela">
            {
                linhas.map((linha) => {
                    const { classNames, produto, tamanho, especificacao, precoBruto, montante, quantidade, id } = linha;
                    return (
                        <Linha
                            classNames={classNames}
                            produto={produto}
                            tamanho={tamanho}
                            especificacao={especificacao}
                            precoBruto={precoBruto}
                            montante={montante}
                            quantidade={quantidade}
                            key={id}
                            id={id}
                            onChange={alterLinhaTabela}
                            onFocus={null}
                            removeLine={removeLinha}
                            onChangeProduto={changeProduto}
                            onChangeTamanho={changeTamanho}
                        />
                    )
                })
            }
            <LastLine
                linhas={linhas}
                addLine={addLinha}
            />
        </div>
    )
}

export default Tabela
