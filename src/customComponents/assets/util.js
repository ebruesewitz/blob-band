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

const getFirstCharFromSoundName = soundName => soundName[0];

const isLucySoundName = soundName => getFirstCharFromSoundName(soundName) === 'l';
const isGeoffSoundName = soundName => getFirstCharFromSoundName(soundName) === 'g';
const isFreddySoundName = soundName => getFirstCharFromSoundName(soundName) === 'f';

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

export function validateBlocks(currentLevel, songArray) {
    console.log(songArray);
    switch(currentLevel) {
        case 1:
            for (let i = 0; i < songArray.length; i++) {
                if (songArray[i].indexOf('lucy') !== -1) {
                    return true;
                } else {
                    return false;
                }
            }
    }
}
