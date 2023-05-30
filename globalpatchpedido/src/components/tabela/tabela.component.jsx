import { Component } from "react";
import Linha from "../linha/linha.component"
import './tabela.css';

class Tabela extends Component {
    render () {
        const { linhas } = this.props;
        return (
            <div className="tabela">
                {
                    linhas.map((linha)=> {
                        const { classNames, produto, tamanho, especificacao, precoBruto, montante,quantidade } = linha;
                        return <Linha
                        classNames={classNames}
                        produto={produto}
                        tamanho={tamanho}
                        especificacao={especificacao}
                        precoBruto={precoBruto}
                        montante={montante}
                        quantidade={quantidade}
                      />
                      })
                }
            </div>
        )
    }
}

export default Tabela