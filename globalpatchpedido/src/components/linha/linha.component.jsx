import { Component } from "react";
import "./linha.css"

class Linha extends Component {
    render() {
        const { produto, tamanho, especificacao, quantidade, precoBruto, montante, classNames, id, onFocus, lastline, onChange, removeLine, addLine, onChangeProduto, onChangeTamanho } = this.props;
        if (lastline === true) {
            return (
                <div className={`linha`}>
                    <div className={`celula ${classNames[0]} bold produto`}>
                        {
                            produto
                        }
                    </div>
                    <div className={`celula ${classNames[1]}`}>
                        {
                            tamanho
                        }
                    </div>
                    <div className={`celula ${classNames[2]}`}>
                        {
                            especificacao
                        }
                    </div>
                    <div className={`celula ${classNames[3]}`}>
                        {
                            quantidade
                        }
                    </div>
                    <div className={`celula ${classNames[4]}`}>
                        {

                        }
                    </div>
                    <div className={`celula ${classNames[5]}`}>+
                        {
                            montante.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                        }
                        <button onClick={addLine} >
                            <svg onClick={addLine} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                        </button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={`linha`}>
                    <div className={`celula ${classNames[0]} bold produto`}>
                        {
                            <select value={produto} onChange={(event) => onChangeProduto(event, id)}>
                                <option value="colchonete">Colchonete Standard</option>
                                <option value="caminha">Caminha Standard</option>
                                <option value="colchonete_P">Colchonete Premium</option>
                                <option value="caminha_P">Caminha Premium</option>
                            </select>
                        }
                    </div>
                    <div className={`celula ${classNames[1]}`}>
                        <select value={tamanho} onChange={(event) => onChangeTamanho(event, id)}>
                            <option value="P">P</option>
                            <option value="M">M</option>
                            <option value="G">G</option>
                            {
                                (produto === "colchonete" || produto === "colchonete_P") && (
                                    <option value="GG">GG</option>
                                )
                            }
                        </select>
                    </div>
                    <div className={`celula ${classNames[2]}`}>
                        {
                            especificacao
                        }
                    </div>
                    <div className={`celula ${classNames[3]}`}>
                        <input type="number" defaultValue={quantidade} onChange={onChange} onFocus={onFocus} id={`${id}`} min={0} />
                    </div>
                    <div className={`celula ${classNames[4]}`}>
                        {
                            precoBruto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                        }
                    </div>
                    <div className={`celula ${classNames[5]}`}>

                        {
                            montante.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                        }
                        <button onClick={(event) => removeLine(event, id)}>
                            <svg onClick={(event) => removeLine(event, id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                </div>
            )
        }
    }
}

export default Linha;