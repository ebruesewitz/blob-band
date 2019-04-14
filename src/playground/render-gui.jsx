import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {compose} from 'redux';

import AppStateHOC from '../lib/app-state-hoc.jsx';
import GUI from '../containers/gui.jsx';
import HashParserHOC from '../lib/hash-parser-hoc.jsx';
import TitledHOC from '../lib/titled-hoc.jsx';
import log from '../lib/log.js';


// import { Router, browserHistory, Route, Link } from 'react-router';
// import logo from '../customComponents/logo.svg';
// import Sound from 'react-sound';
// import Button from '../customComponents/components/SoundButton';
// import sadTrombone from '../customComponents/assets/sounds/sadTrombone.mp3'
// import fart from '../customComponents/assets/sounds/fart.mp3'

// import ActivityPage1 from '../customComponents/pages/ActivityPage1';
// import ActivityPage2 from '../customComponents/pages/ActivityPage2';
// import ActivityPage3 from '../customComponents/pages/ActivityPage3';
// import ActivityPage4 from '../customComponents/pages/ActivityPage4';
// import ActivityPage5 from '../customComponents/pages/ActivityPage5';
// import ActivityPage6 from '../customComponents/pages/ActivityPage6';
// import ActivityPage7 from '../customComponents/pages/ActivityPage7';
// import ActivityPage8 from '../customComponents/pages/ActivityPage8';
// import ActivityPage9 from '../customComponents/pages/ActivityPage9';
// import ActivityPage10 from '../customComponents/pages/ActivityPage10';
// import TitlePage from '../customComponents/pages/TitlePage';

// import LottieControl from '../customComponents/components/LottieControl';

const onClickLogo = () => {
    window.location = 'https://scratch.mit.edu';
};

class App extends Component {
    render() {
      return (
        <Router history={browserHistory}>
          <Route path="/button" component={Home}/>
          <Route path="/" component={TitlePage} history={browserHistory}/>
        </Router>
      );
    }
  }

/*
 * Render the GUI playground. This is a separate function because importing anything
 * that instantiates the VM causes unsupported browsers to crash
 * {object} appTarget - the DOM element to render to
 */
export default appTarget => {
    GUI.setAppElement(appTarget);

    // note that redux's 'compose' function is just being used as a general utility to make
    // the hierarchy of HOC constructor calls clearer here; it has nothing to do with redux's
    // ability to compose reducers.
    const WrappedGui = compose(
        AppStateHOC,
        HashParserHOC,
        TitledHOC
    )(GUI);

    // TODO a hack for testing the backpack, allow backpack host to be set by url param
    const backpackHostMatches = window.location.href.match(/[?&]backpack_host=([^&]*)&?/);
    const backpackHost = backpackHostMatches ? backpackHostMatches[1] : null;

    const scratchDesktopMatches = window.location.href.match(/[?&]isScratchDesktop=([^&]+)/);
    let simulateScratchDesktop;
    if (scratchDesktopMatches) {
        try {
            // parse 'true' into `true`, 'false' into `false`, etc.
            simulateScratchDesktop = JSON.parse(scratchDesktopMatches[1]);
        } catch {
            // it's not JSON so just use the string
            // note that a typo like "falsy" will be treated as true
            simulateScratchDesktop = scratchDesktopMatches[1];
        }
    }

    if (process.env.NODE_ENV === 'production' && typeof window === 'object') {
        // Warn before navigating away
        window.onbeforeunload = () => true;
    }

    ReactDOM.render(
    // important: this is checking whether `simulateScratchDesktop` is truthy, not just defined!
        <WrappedGui
            canSave={false}
            onClickLogo={onClickLogo}
        />,
    appTarget);
};




// class Page extends Component{
//   constructor(){
//     super();
//     this.state = {
//       shouldRenderSound : false,
//       songArray: [
//         sadTrombone,
//         fart,
//       ],
//       currentSong: null,
//       index: 0,
//     }
//   }

//   playSound = () => {
//     this.setState({
//       shouldRenderSound: true,
//       currentSong: this.state.songArray[this.state.index],
//     })
//   }

//   handleSongFinishedPlaying = () => {
//     if (this.state.index < this.state.songArray.length) {
//       this.setState({
//         currentSong: this.state.songArray[this.state.index + 1],
//         index: this.state.index + 1,
//       })
//     }
//   }

//   render(){
//     const title = this.props.title;
//     return (
//     <div className="App">
//     <div className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <h2>{title}</h2>
//     </div>
//     <p className="App-intro">
//       This is the {title} page.
//     </p>
//     <p>
//       <Link to="/">Home</Link>
//     </p>
//     <p>
//       <Link to="/about">About</Link>
//     </p>
//     <p>
//       <Link to="/settings">Settings</Link>
//     </p>
//     <Button text={"Play Sound"} onClick={() => {
//       console.log('hello');
//       this.playSound();
//     }}/>
//     {this.state.shouldRenderSound && <Sound
//           url={this.state.currentSong}
//           playStatus={Sound.status.PLAYING}
//           playFromPosition={0 /* in milliseconds */}
//           autoLoad={true}
//           onFinishedPlaying={this.handleSongFinishedPlaying}
//         />}
//     <LottieControl />
//     </div>
//     );
//   }
// }

// const Home = (props) => (
//   <Page title="Home" {...props}/>
// );

