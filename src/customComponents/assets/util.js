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
        const slashIndex = sound.lastIndexOf('/');
        const dotIndex = sound.indexOf('.');
        const soundName = sound.slice(slashIndex+1, dotIndex);
        const note = soundName[soundName.length-1];

        switch (note) {
            case 'A':
                if(isLucySoundName){
                    return 0;
                }else if(isGeoffSoundName){
                    return 6;
                }else if(isFreddySoundName){
                    return 12;
                }
            case 'B':
                if(isLucySoundName){
                    return 1;
                }else if(isGeoffSoundName){
                    return 7;
                }else if(isFreddySoundName){
                    return 13;
                }
            case 'C':
                if(isLucySoundName){
                    return 2;
                }else if(isGeoffSoundName){
                    return 8;
                }else if(isFreddySoundName){
                    return 14;
                }
            case 'D':
                if(isLucySoundName){
                    return 3;
                }else if(isGeoffSoundName){
                    return 9;
                }else if(isFreddySoundName){
                    return 15;
                }
            case 'E':
                if(isLucySoundName){
                    return 4;
                }else if(isGeoffSoundName){
                    return 10;
                }else if(isFreddySoundName){
                    return 16;
                }
            default:
                if(isLucySoundName){
                    return 5;
                }else if(isGeoffSoundName){
                    return 11;
                }else if(isFreddySoundName){
                    return 17;
                }
        }
    })
)