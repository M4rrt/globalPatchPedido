import { Component } from "react";
import './tabela.css';

class Tabela extends Component {
    render () {
        return (
            <div className="">
                <Linha classNames={["teste","teste","teste","teste","teste"]} />
            </div>
        )
    }
}