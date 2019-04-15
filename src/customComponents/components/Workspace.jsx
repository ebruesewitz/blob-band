import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Button from './Button.jsx';
import HintModal from './HintModal.jsx';
import Sound from 'react-sound';
import Lottie from 'react-lottie';
import { colors } from '../constants.js'

import geoffA from '../assets/sounds/geoffA.mp3';
import geoffB from '../assets/sounds/geoffB.mp3';
import geoffC from '../assets/sounds/geoffC.mp3';
import geoffD from '../assets/sounds/geoffD.mp3';
import geoffE from '../assets/sounds/geoffE.mp3';
import geoffRest from '../assets/sounds/geoffRest.mp3';

import freddieA from '../assets/sounds/freddieA.mp3';
import freddieB from '../assets/sounds/freddieB.mp3';
import freddieC from '../assets/sounds/freddieC.mp3';
import freddieD from '../assets/sounds/freddieD.mp3';
import freddieE from '../assets/sounds/freddieE.mp3';
import freddieRest from '../assets/sounds/freddieRest.mp3';

import lucyA from '../assets/sounds/lucyA.mp3';
import lucyB from '../assets/sounds/lucyB.mp3';
import lucyC from '../assets/sounds/lucyC.mp3';
import lucyD from '../assets/sounds/lucyD.mp3';
import lucyE from '../assets/sounds/lucyE.mp3';
import lucyRest from '../assets/sounds/lucyRest.mp3';

import geoffGlasses from '../assets/animations/geoffGlasses.json';
import geoffJump from '../assets/animations/geoffJump.json';
import geoffSpin from '../assets/animations/geoffSpin.json';
import geoffBig from '../assets/animations/geoffBig.json';
import geoffCrown from '../assets/animations/geoffCrown.json';
import geoffIdle from '../assets/animations/geoffIdle.json';

import freddieDrip from '../assets/animations/freddieDrip.json';
import freddieEyes from '../assets/animations/freddieEyes.json';
import freddieIdle from '../assets/animations/freddieIdle.json';
import freddieSmall from '../assets/animations/freddieSmall.json';
import freddieThumbs from '../assets/animations/freddieThumbs.json';
import freddieSpin from '../assets/animations/freddieSpin.json';

import lucyBows from '../assets/animations/lucyBows.json';
import lucyBowSpin from '../assets/animations/lucyBowSpin.json';
import lucyEyes from '../assets/animations/lucyEyes.json';
import lucyIdle from '../assets/animations/lucyIdle.json';
import lucyJump from '../assets/animations/lucyJump.json';
import lucySmall from '../assets/animations/lucySmall.json';

import { createAnimationsArray, transformBlockData } from '../assets/util.js';


const soundFileToNameMap = {
    [lucyA]: 'lucyA',
    [lucyB]: 'lucyB',
    [lucyC]: 'lucyC',
    [lucyD]: 'lucyD',
    [lucyE]: 'lucyE',
    [lucyRest]: 'lucyRest',
    [geoffA]: 'geoffA',
    [geoffB]: 'geoffB',
    [geoffC]: 'geoffC',
    [geoffD]: 'geoffD',
    [geoffE]: 'geoffE',
    [geoffRest]: 'geoffRest',
    [freddieA]: 'freddieA',
    [freddieB]: 'freddieB',
    [freddieC]: 'freddieC',
    [freddieD]: 'freddieD',
    [freddieE]: 'freddieE',
    [freddieRest]: 'freddieRest',
};

const fileToSoundNameMap = {
    lucyA,
    lucyB,
    lucyC,
    lucyD,
    lucyE,
    lucyRest,
    geoffA,
    geoffB,
    geoffC,
    geoffD,
    geoffE,
    geoffRest,
    freddieA,
    freddieB,
    freddieC,
    freddieD,
    freddieE,
    freddieRest,
}

const getSoundNameFromFile = soundFile => soundFileToNameMap[soundFile];
const getSoundNamesFromSongArray = songArray => songArray.map(song => getSoundNameFromFile(song));

const convertSoundNamesToFiles = soundNameArray => soundNameArray.map(soundName => fileToSoundNameMap[soundName]);

class Workspace extends Component {
    constructor() {
        super();
        this.state = {
            shouldRenderSound: false,
            songArray: [
                lucyE,
                geoffD,
                freddieC,
                freddieD,
                lucyE,
                geoffE,
                freddieE,
                geoffD,
                lucyD,
                freddieD,
                lucyC,
                freddieE,
                geoffE,

            ],
            currentSong: null,
            index: 0,
            isStopped: false,
            isPaused: false,
            animationsArray: null,
            currentLucyAnimation: lucyIdle,
            currentFreddieAnimation: freddieIdle,
            currentGeoffAnimation: geoffIdle,
            animationsList: [
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
            ]
        };
        this.handleSongFinishedPlaying = this.handleSongFinishedPlaying.bind(this);
        this.getArrayAndHandleSound = this.getArrayAndHandleSound.bind(this);
        this.handlePlaySound = this.handlePlaySound.bind(this);
        this.handleAnimation = this.handleAnimation.bind(this);
    }

    getArrayAndHandleSound() {
        const soundArray = convertSoundNamesToFiles(transformBlockData(this.props.blockData));
        let animations = createAnimationsArray(getSoundNamesFromSongArray(soundArray));
        this.setState({
            animationsArray: animations,
            index: 0,
            songArray: soundArray,
        }, () => {
            this.handlePlaySound();
        });
    }

    handlePlaySound() {
        this.setState({
            shouldRenderSound: true,
            currentSong: this.state.songArray[this.state.index],
            index: this.state.index + 1,
        }, () => {
            console.log(this.state)
        });
    }

    handleSongFinishedPlaying() {
        if (this.state.index <= this.state.songArray.length - 1) {
            this.setState({
                currentSong: this.state.songArray[this.state.index],
                index: this.state.index + 1,
                currentLucyAnimation: lucyIdle,
                currentGeoffAnimation: geoffIdle,
                currentFreddieAnimation: freddieIdle,
            })
        } else {
            this.setState({
                currentSong: null,
                currentLucyAnimation: lucyIdle,
                currentGeoffAnimation: geoffIdle,
                currentFreddieAnimation: freddieIdle,
            })
        }
    }

    handleAnimation() {
        if (this.state.index <= this.state.animationsArray.length) {
            if (this.state.animationsArray[this.state.index - 1] < 5) {
                this.setState({
                    currentLucyAnimation: this.state.animationsList[this.state.animationsArray[this.state.index - 1]],
                })
            } else if (this.state.animationsArray[this.state.index - 1] > 5 && this.state.animationsArray[this.state.index - 1] < 12) {
                this.setState({
                    currentGeoffAnimation: this.state.animationsList[this.state.animationsArray[this.state.index - 1]],
                })
            } else {
                this.setState({
                    currentFreddieAnimation: this.state.animationsList[this.state.animationsArray[this.state.index - 1]],
                })
            }
        }
    }

    render() {
        const {
            classes,
            currentSelectedStep,
        } = this.props;

        const defaultOptionsFreddie = {
            loop: true,
            autoplay: true,
            animationData: this.state.currentFreddieAnimation,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };
        const defaultOptionsGeoff = {
            loop: true,
            autoplay: true,
            animationData: this.state.currentGeoffAnimation,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };
        const defaultOptionsLucy = {
            loop: true,
            autoplay: true,
            animationData: this.state.currentLucyAnimation,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return (
            <div className={classes.flexCenter}>
                <div>
                    <div className={classes.workspace} >
                        <div>
                            <Lottie options={defaultOptionsFreddie}
                                height={210}
                                width={210}
                                isStopped={this.state.isStopped}
                                isPaused={this.state.isPaused} />
                        </div>
                        <div className={classes.gridDisplay}>
                            <Lottie options={defaultOptionsLucy}
                                height={170}
                                width={170}
                                isStopped={this.state.isStopped}
                                isPaused={this.state.isPaused} />
                            <Lottie options={defaultOptionsGeoff}
                                height={200}
                                width={200}
                                isStopped={this.state.isStopped}
                                isPaused={this.state.isPaused} />
                        </div>
                    </div>
                </div>
                <Button className={classes.button} label='Run' primary='true' onClick={() => {
                    this.getArrayAndHandleSound();
                }} />
                <HintModal />
                {this.state.shouldRenderSound && <Sound
                    url={this.state.currentSong}
                    playStatus={Sound.status.PLAYING}
                    playFromPosition={0 /* in milliseconds */}
                    autoLoad={true}
                    onLoad={this.handleAnimation}
                    onFinishedPlaying={this.handleSongFinishedPlaying}
                />}
            </div>
        );
    }
}

const styles = {
    flexCenter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingTop: 88,
    },
    workspace: {
        width: '100%',
        height: 400,
        margin: 5,
        marginTop: 10,
        backgroundColor: 'white',
        display: 'flex',
        boxSizing: 'border-box',
        outline: 'none',
        maxWidth: '100%',
        margin: 0,
        border: `solid 2px ${colors.gray}`,
        flexDirection: 'column',
        padding: 0,
        borderRadius: 6,
    },
    button: {
        margin: 5,
        marginTop: 10,
        width: '50%',
        padding: 12,
    },
    gridDisplay: {
        display: 'grid',
        gridTemplateColumns: 'auto auto',
    },
}

export default injectSheet(styles)(Workspace);