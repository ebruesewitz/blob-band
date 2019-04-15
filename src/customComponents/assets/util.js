/* animationsList: [
    lucyBows,
    lucyBowSpin,
    lucyEyes,
    lucyJump,
    lucySmall,
    lucyIdle,
    geoffGlasses,
    geoffJump,
    geoffSpin,
    geoffBig,
    geoffCrown,
    geoffIdle,
    freddieDrip,
    freddieEyes,
    freddieSmall,
    freddieSpin,
    freddieThumbs,
    freddieIdle,
] */

const OPCODES = {
    RUN_BLOCK: 'event_whenflagclicked',
    LOOP_BLOCK: 'control_repeat',
}

const getFirstCharFromSoundName = soundName => soundName[0];

const isLucySoundName = soundName => getFirstCharFromSoundName(soundName) === 'l';
const isGeoffSoundName = soundName => getFirstCharFromSoundName(soundName) === 'g';
const isFreddySoundName = soundName => getFirstCharFromSoundName(soundName) === 'f';

const findNextBlock = blockObj => blockObj.next;

const findLoopChild = (blockData, loopId) => {
    const loopNext = blockData[loopId].next;
    let loopChild;
    Object.keys(blockData).some((id) => {
        if(blockData[id].parent === loopId && loopNext !== id){
            loopChild = id;
            return true;
        }
        return false;
    });
    const sortedChildren = sortBlocks(blockData, loopChild);
    return sortedChildren;
}

const sortBlocks = (blockData, startBlockId) => {
    let sortedArray = [startBlockId];
    if(blockData[startBlockId].opcode === OPCODES.LOOP_BLOCK){
        const loopChildrenArray = findLoopChild(blockData, startBlockId);
        if(blockData[loopChildrenArray[0]].opcode === OPCODES.LOOP_BLOCK){
            loopChildrenArray.shift();
        }
        for(let i=0; i < blockData[startBlockId].fields.repeat.value ; i++){
            sortedArray = sortedArray.concat(loopChildrenArray);
        }
    }
    let nextBlock = findNextBlock(blockData[startBlockId]);
    while(nextBlock != null){
        const currentBlock = nextBlock;
        if(blockData[currentBlock].opcode === OPCODES.LOOP_BLOCK){
            const loopChildrenArray = findLoopChild(blockData, currentBlock);
            if(blockData[loopChildrenArray[0]].opcode === OPCODES.LOOP_BLOCK){
                loopChildrenArray.shift();
            }
            for(let i=0; i < blockData[currentBlock].fields.repeat.value ; i++){
                sortedArray = sortedArray.concat(loopChildrenArray);
            }
        }else{
            sortedArray.push(currentBlock);
        }
        nextBlock = findNextBlock(blockData[currentBlock]);
    }
    if(blockData[sortedArray[0]].opcode === OPCODES.RUN_BLOCK){
        sortedArray.shift();
    }
    return sortedArray;
}

export const transformBlockData = blockData => {
    let sortedData = [];

    if(blockData && typeof blockData === 'object'){
        Object.keys(blockData).some((id) => {
            if(blockData[id].opcode === OPCODES.RUN_BLOCK){
                sortedData = sortBlocks(blockData, blockData[id].id)
                return true;
            }
            return false;
        });
    }
    return sortedData;
}


export const createAnimationsArray = soundArray => (
    soundArray.map(sound => {
        // const slashIndex = sound.lastIndexOf('/');
        // const dotIndex = sound.indexOf('.');
        const note = sound[sound.length-1];

        switch (note) {
            case 'A':
                if(isLucySoundName(sound)){
                    return 0;
                }else if(isGeoffSoundName(sound)){
                    return 6;
                }else if(isFreddySoundName(sound)){
                    return 12;
                }
            case 'B':
                if(isLucySoundName(sound)){
                    return 1;
                }else if(isGeoffSoundName(sound)){
                    return 7;
                }else if(isFreddySoundName(sound)){
                    return 13;
                }
            case 'C':
                if(isLucySoundName(sound)){
                    return 2;
                }else if(isGeoffSoundName(sound)){
                    return 8;
                }else if(isFreddySoundName(sound)){
                    return 14;
                }
            case 'D':
                if(isLucySoundName(sound)){
                    return 3;
                }else if(isGeoffSoundName(sound)){
                    return 9;
                }else if(isFreddySoundName(sound)){
                    return 15;
                }
            case 'E':
                if(isLucySoundName(sound)){
                    return 4;
                }else if(isGeoffSoundName(sound)){
                    return 10;
                }else if(isFreddySoundName(sound)){
                    return 16;
                }
            case 't':
                if(isLucySoundName(sound)){
                    return 5;
                }else if(isGeoffSoundName(sound)){
                    return 11;
                }else if(isFreddySoundName(sound)){
                    return 17;
                }
            default:
                if(isLucySoundName(sound)){
                    return 5;
                }else if(isGeoffSoundName(sound)){
                    return 11;
                }else if(isFreddySoundName(sound)){
                    return 17;
                }
        }
    })
)
