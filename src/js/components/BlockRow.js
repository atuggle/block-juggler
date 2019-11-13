import React from "react";

export default class BlockRow extends React.Component {

    render() {
        return (
            <div>
                <span>{this.props.block.block_num}</span>
                &nbsp;|&nbsp;
                <span>{this.props.block.transactions.length} Transactions</span>
                &nbsp;|&nbsp;
                <span>{this.props.block.id}</span>
                <br />
            </div>
        );
    };
}