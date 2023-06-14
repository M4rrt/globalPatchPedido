import { Component } from "react";
import "./linha.css"

class Linha extends Component {
    render() {
        const { produto, tamanho, especificacao, quantidade, precoBruto, montante, classNames,id,onFocus,lastline, onChange} = this.props;
        console.log(onChange)
        if(lastline===true){
            return(
                <div className={`linha`}>
                <div className={`celula ${classNames[0]} bold`}>
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

                </div>
            </div>
        )
    }else {
            return(
                <div className={`linha`}>
                <div className={`celula ${classNames[0]} bold`}>
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
                    <input type="number" defaultValue={quantidade} onChange={onChange} onFocus={onFocus} id={`${id}`} min={0}/>
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

                </div>
            </div>
        )
    }
    }
}

export default Linha;