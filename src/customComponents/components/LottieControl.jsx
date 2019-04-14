import React, { Component } from 'react'
import injectSheet from 'react-jss';
import Lottie from 'react-lottie';
import * as lucyIdle from '../assets/animations/lucyIdle.json';
import * as lucyColors from '../assets/animations/lucyColors.json';
import * as lucyBowSpin from '../assets/animations/lucyBowSpin.json';
import * as lucyJump from '../assets/animations/lucyJump.json';

import * as geoffSpin from '../assets/animations/geoffSpin.json';

class LottieControl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isStopped: false,
      isPaused: false,
      animationsArray: [lucyIdle, lucyColors, lucyBowSpin, lucyJump, geoffSpin],
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
      animationData: this.state.animationsArray[3],
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    const defaultOptions2 = {
      loop: true,
      autoplay: true,
      animationData: this.state.animationsArray[4],
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return <div>
      <Lottie className={classes.lucy} options={defaultOptions}
        height={200}
        width={200}
        isStopped={this.state.isStopped}
        isPaused={this.state.isPaused} />
      <Lottie className={classes.lucy} options={defaultOptions2}
        height={200}
        width={200}
        isStopped={this.state.isStopped}
        isPaused={this.state.isPaused} />
    </div>
  }
}

const styles = {
  lucy: {
    float: 'right',
  },
  geoff: {
    float: 'left',
  }
};


export default injectSheet(styles)(LottieControl);