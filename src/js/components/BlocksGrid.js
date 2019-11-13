import React from "react";

import BlockRow from './BlockRow';

export default class BlocksGrid extends React.Component {

    getBlockRows() {
        if (this.props.allBlocks) {
            return (
                <div>
                {
                    this.props.allBlocks.map((currentBlock, i) =>
                        <BlockRow key={i} block={currentBlock}/>)
                }
                </div>
            );
        }

        return null;
    }

    render() {
        return (
            <div>
                {
                    this.getBlockRows()
                }
            </div>
        );
    }
}