import { Component } from "react";
import "./linha.css"

class Linha extends Component {
    render() {
        const { produto, tamanho, especificacao, quantidade, precoBruto, montante, classNames, id, onFocus, lastline, onChange, removeLine, addLine,onChangeProduto,onChangeTamanho } = this.props;
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
                    <div className={`celula ${classNames[5]}`}>
                        {
                            montante.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                        }
                        <button onClick={addLine} >Adicionar</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={`linha`}>
                    <div className={`celula ${classNames[0]} bold produto`}>
                        {
                            <select defaultValue={produto} onChange={(event) => onChangeProduto(event , id)}>
                                <option value="colchonete">Colchonete Standard</option>
                                <option value="caminha">Caminha Standard</option>
                                <option value="colchonete_P">Colchonete Premium</option>
                                <option value="caminha_P">Caminha Premium</option>
                            </select>
                        }
                    </div>
                    <div className={`celula ${classNames[1]}`}>
                            <select defaultValue={tamanho} onChange={(event) => onChangeTamanho(event,id)}>
                                {(id===3) && (console.log(tamanho))}
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
                        <button onClick={removeLine} value={id}>Remover</button>

                    </div>
                </div>
            )
        }
    }
}

export default Linha;