import _ from 'lodash';

const blocks = [{
    "id": 443,
    "form": [
      [1, 0, 1],
      [1, 1, 1]
    ]
  },
  {
    "id": 327,
    "form": [
      [0, 1, 0],
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 0],
      [0, 1, 0]
    ]
  },
  {
    "id": 891,
    "form": [
      [0, 0, 1],
      [1, 0, 1],
      [1, 1, 1]
    ]
}];


export const layout = (blocks) => {
    const copyBlocks = _.cloneDeep(blocks);
    const blockWidth = copyBlocks[0].form[0].length;
    const result = [];
    let position = 0;
    // нахождение первого блока
    for (const block of copyBlocks) {
        if ( block.form[block.form.length - 1].reduce((a, b) => a + b, 0) === blockWidth) {
            position += 1;
            result.push({ blockId: block.id, position: position, isRotated: false });
            break;
        } else if (block.form[0].reduce((a, b) => a + b, 0) === gridWidth) {
            position += 1;
            result.push({ blockId: block.id, position: position, isRotated: true });
            break;
        }
    }

    // функция поиска нового блока.
    const connectBlock = () => {
        const lastBlock = result[result.length - 1];
       
        let formLastBlock = [];
        for (const { id, form } of copyBlocks) {
            if (id === lastBlock.blockId) {
                formLastBlock = _.cloneDeep(form);
                break;
            }
        }
        
        if (lastBlock.isRotated) {
            formLastBlock.reverse();
        }

        let filledBlockIndex = formLastBlock.map((call) => call.reduce((a, b) => a + b, 0)).indexOf(blockWidth);

        let cutBlock = formLastBlock.slice(0, filledBlockIndex);

        const connectBlock = cutBlock.map((call) => {
            return call.map((item) => item === 0 ? item = 1: item = 0);
        });
        return connectBlock;
    };

    const nextBlock = () => {
        for (const { id, form } of copyBlocks) {
            if (!result.map((call) => call.blockId).includes(id)) {
                let lastConnectBlock = connectBlock();

                if (form.slice(0, lastConnectBlock.length).reverse().toString().includes(lastConnectBlock.toString()) && form[lastConnectBlock.length].reduce((a, b) => a + b, 0) === blockWidth) {
                    position += 1;
                    result.push({ blockId: id, position: position, isRotated: true });
                } else if (form.slice(-lastConnectBlock.length).toString().includes(lastConnectBlock.toString())) {
                    position += 1;
                    result.push({ blockId: id, position: position, isRotated: false });
                }   
            }
        }
        if (result.length < copyBlocks.length) {
            nextBlock();
        }
    };
    nextBlock();
    return result;
};
