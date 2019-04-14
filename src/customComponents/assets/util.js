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

export default class Util {
    static createAnimationsArray(soundArray) {
        let animationsArray = [];
        let slashIndex;
        let dotIndex;
        for (let i = 0; i < soundArray.length; i++) {
            slashIndex = soundArray[i].lastIndexOf('/');
            dotIndex = soundArray[i].indexOf('.');
            let soundName = soundArray[i].slice(slashIndex + 1, dotIndex);
            if (soundName[0] === 'l') {
                let sound = soundName[soundName.length - 1];
                switch (sound) {
                    case 'A':
                        animationsArray.push(0);
                        break;
                    case 'B':
                        animationsArray.push(1);
                        break;
                    case 'C':
                        animationsArray.push(2);
                        break;
                    case 'D':
                        animationsArray.push(3);
                        break;
                    case 'E':
                        animationsArray.push(4);
                        break;
                    default:
                        animationsArray.push(5);
                        break;
                }
            } else if (soundName[0] === 'g') {
                let sound = soundName[soundName.length - 1];
                switch (sound) {
                    case 'A':
                        animationsArray.push(6);
                        break;
                    case 'B':
                        animationsArray.push(7);
                        break;
                    case 'C':
                        animationsArray.push(8);
                        break;
                    case 'D':
                        animationsArray.push(9);
                        break;
                    case 'E':
                        animationsArray.push(10);
                        break;
                    default:
                        animationsArray.push(11);
                        break;
                }
            } else if (soundName[0] === 'f') {
                let sound = soundName[soundName.length - 1];
                switch (sound) {
                    case 'A':
                        animationsArray.push(12);
                        break;
                    case 'B':
                        animationsArray.push(13);
                        break;
                    case 'C':
                        animationsArray.push(14);
                        break;
                    case 'D':
                        animationsArray.push(15);
                        break;
                    case 'E':
                        animationsArray.push(16);
                        break;
                    default:
                        animationsArray.push(17);
                        break;
                }
            }
        }
        return animationsArray;
    }
}