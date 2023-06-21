import { Component } from "react";
import Linha from "../linha/linha.component"
import './tabela.css';

class Tabela extends Component {
    render () {
        const { linhas,onQntChangeHandler,onFocusHandler,removeLine, addLine, onChangeProduto, onChangeTamanho } = this.props;
        return (
            <div className="tabela">
                {   
                    linhas.map((linha)=> {
                        const { classNames, produto, tamanho, especificacao, precoBruto, montante,quantidade, id,lastline } = linha;
                        return <Linha 
                        classNames={classNames} 
                        produto={produto} tamanho={tamanho} 
                        especificacao={especificacao} 
                        precoBruto={precoBruto} 
                        montante={montante} 
                        quantidade={quantidade} 
                        key={id} 
                        id={id}
                        onChange={onQntChangeHandler}
                        onFocus={onFocusHandler}
                        lastline={lastline}
                        removeLine={removeLine}
                        addLine={addLine}
                        onChangeProduto={onChangeProduto}
                        onChangeTamanho={onChangeTamanho}
                      />
                      })
                }
            </div>
        )
    }
}

export default Tabela