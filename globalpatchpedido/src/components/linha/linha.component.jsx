import { Component } from "react";
import "./linha.css"

class Linha extends Component {
    render() {
        const { produto, tamanho, especificacao, quantidade, precoBruto, montante, classNames } = this.props
        return (
            <div className="linha">
                <div className={`celula ${classNames[0]}`}>
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
                    <input type="number" placeholder={quantidade} />
                </div>
                <div className={`celula ${classNames[4]}`}>
                    {
                        `R$ ${precoBruto}`
                    }
                </div>
                <div className={`celula ${classNames[5]}`}>

                    {
                        `R$ ${montante}`
                    }

                </div>
            </div>
        )
    }
}

export default Linha;