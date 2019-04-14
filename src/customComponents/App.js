
import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from './logo.svg';
import Sound from 'react-sound';
import Button from './components/SoundButton';
import { instructions } from './assets/textOptions';

import ActivityPage from './pages/ActivityPage';
import TitlePage from './pages/TitlePage';

import LottieControl from './components/LottieControl';

class Page extends Component{
  constructor(){
    super();
    this.state = {
    }
  }

  render(){
    const title = this.props.title;
    return (
    <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{title}</h2>
    </div>
    <p className="App-intro">
      This is the {title} page.
    </p>
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <Link to="/about">About</Link>
    </p>
    <p>
      <Link to="/settings">Settings</Link>
    </p>
    </div>
    );
  }
}

const Home = (props) => (
  <Page title="Home" {...props}/>
);

// Leaving this in here so we can remember how to route between multiple pages

// const About = (props) => (
//   <Page title="About"/>
// );


class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/1" render={() => <ActivityPage instructions={instructions[0]} />}/>
        <Route path="/2" render={(props) => <ActivityPage {...props} instructions={instructions[1]} />}/>
        <Route path="/3" render={(props) => <ActivityPage {...props} instructions={instructions[2]} />}/>
        <Route path="/4" render={(props) => <ActivityPage {...props} instructions={instructions[3]} />}/>
        <Route path="/5" render={(props) => <ActivityPage {...props} instructions={instructions[4]} />}/>
        <Route path="/6" render={(props) => <ActivityPage {...props} instructions={instructions[5]} />}/>
        <Route path="/7" render={(props) => <ActivityPage {...props} instructions={instructions[6]} />}/>
        <Route path="/8" render={(props) => <ActivityPage {...props} instructions={instructions[7]} />}/>
        <Route path="/9" render={(props) => <ActivityPage {...props} instructions={instructions[8]} />}/>
        <Route path="/10" render={(props) => <ActivityPage {...props} instructions={instructions[9]} />}/>
        <Route path="/" component={TitlePage} history={browserHistory}/>
      </Router>
    );
  }
}

export default App;