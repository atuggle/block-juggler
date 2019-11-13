import React from "react";

import BlocksGrid from './BlocksGrid';
import EosService from "../business.logic/eos.service"

export default class BlockJuggler extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            allBlocks: []
        };
    };

    GetBlocks() {
        EosService.getAllBlocks(this);
    }

    getAllBlocks(blocks) {
        console.log("getAllBlocks - Callback");
        console.log(blocks);
        this.setState({allBlocks: blocks});
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <h1>Welcome to Block Juggler</h1>
                    <button onClick={(e) => {this.GetBlocks()}} >
                        Load Blocks
                    </button>
                    <div>
                        <BlocksGrid allBlocks={this.state.allBlocks} />
                    </div>
                </header>
            </div>
        );
    }
}