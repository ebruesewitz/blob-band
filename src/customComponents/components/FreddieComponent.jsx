import React, { Component } from 'react'
import injectSheet from 'react-jss';
import Lottie from 'react-lottie';

import * as freddieIdle from '../assets/animations/freddieIdle.json';
import * as freddieDrip from '../assets/animations/freddieDrip.json';
import * as freddieEyes from '../assets/animations/freddieEyes.json';
import * as freddieSmall from '../assets/animations/freddieSmall.json';
import * as freddieSpin from '../assets/animations/freddieSpin.json';
import * as freddieThumbs from '../assets/animations/freddieThumbs.json';

class FreddieComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isStopped: false,
      isPaused: false,
      animationsArray: [freddieIdle, freddieDrip, freddieEyes, freddieSmall, freddieSpin, freddieThumbs],
      animationIndex: 2,
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
      animationData: this.state.animationsArray[this.state.animationIndex],
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return <div>
      <div>
        <Lottie className={classes.freddie} options={defaultOptions}
          height={200}
          width={200}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused} />
      </div>
    </div>
  }
}

const styles = {
  freddie: {
    float: 'right',
  },
};


export default injectSheet(styles)(FreddieComponent);