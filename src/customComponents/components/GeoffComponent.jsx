import React, { Component } from 'react'
import injectSheet from 'react-jss';
import Lottie from 'react-lottie';

import * as geoffIdle from '../assets/animations/geoffIdle.json';
import * as geoffBig from '../assets/animations/geoffBig.json';
import * as geoffCrown from '../assets/animations/geoffCrown.json';
import * as geoffGlasses from '../assets/animations/geoffGlasses.json';
import * as geoffJump from '../assets/animations/geoffJump.json';
import * as geoffSpin from '../assets/animations/geoffSpin.json';

class GeoffComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isStopped: false,
      isPaused: false,
      animationsArray: [geoffIdle, geoffBig, geoffCrown, geoffGlasses, geoffJump, geoffSpin],
      animationIndex: 2,
      currentAnimation: this.props.currentAnimation,
    };
  }

  handleNextAnimation () {
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
      animationData: this.state.animationsArray[this.state.animationIndex],
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return <div>
      <div>
        <Lottie className={classes.geoff} options={defaultOptions}
          height={200}
          width={200}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused} />
      </div>
    </div>
  }
}

const styles = {
  geoff: {
    float: 'right',
  },
};


export default injectSheet(styles)(GeoffComponent);