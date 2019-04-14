import React, { Component } from 'react'
import injectSheet from 'react-jss';
import Lottie from 'react-lottie';
import * as lucyIdle from '../assets/animations/lucyIdle.json';
import * as lucyBows from '../assets/animations/lucyBows.json';
import * as lucyBowSpin from '../assets/animations/lucyBowSpin.json';
import * as lucyColors from '../assets/animations/lucyColors.json';
import * as lucyEyes from '../assets/animations/lucyEyes.json';
import * as lucyJump from '../assets/animations/lucyJump.json';
import * as lucySmall from '../assets/animations/lucySmall.json';

class LucyComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isStopped: false,
      isPaused: false,
      animationsArray: [lucyIdle, lucyBows, lucyBowSpin, lucyColors, lucyEyes, lucyJump, lucySmall],
      animationIndex: 0,
    };
  }

  handleNextAnimation = () => {
    if (this.state.animationIndex === this.state.animationsArray.length - 1) {
      this.setState({ animationIndex: 0 });
    } else {
      this.setState({ animationIndex: this.state.animationIndex + 1 });
    }
  }

  render() {
    const {
      classes,
    } = this.props;

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: this.state.animationsArray[0],
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return <div>
      <Lottie className={classes.lucy} options={defaultOptions}
        height={300}
        width={300}
        isStopped={this.state.isStopped}
        isPaused={this.state.isPaused} />
    </div>
  }
}

const styles = {
  lucy: {
    float: 'right',
  },
};


export default injectSheet(styles)(LucyComponent);