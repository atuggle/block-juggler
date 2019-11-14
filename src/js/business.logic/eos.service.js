const BASE_URL = 'https://api.eosnewyork.io/v1/chain'

const EosService = {

    getAllBlocks(component) {
        const allBlocks = []

        const url = `${BASE_URL}/get_info`
        fetch(url, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: ""
        })
        .then((response) => {return response.json();})
        .then((response) => { 
            let nextBlockId = response.head_block_id
            this.getBlockForId(nextBlockId, allBlocks, 0, component);
        });
    },

    getBlockForId(id, allBlocks, count, component) {
        if (count < 10) {
            count += 1;
            fetch(`${BASE_URL}/get_block`, {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: "{\"block_num_or_id\":\"" + id + "\"}"
            })
            .then((response) => {return response.json();})
            .then((response) => { 
                let currentBlock = response;
                allBlocks.push(currentBlock)
                this.getBlockForId(currentBlock.previous, allBlocks, count, component);

                component.setState({allBlocks: allBlocks});
            });
        }
    }
}

export default EosService;