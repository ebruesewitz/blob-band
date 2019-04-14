import React from 'react';
import injectSheet from 'react-jss';
import ProgressBar from '../components/ProgressBar';
import HintModal from '../components/HintModal';
import Workspace from '../components/Workspace';

const ActivityPageWithClasses = ({
  classes,
  currentLevel,
  numLevels = 10,
  instructions,
}) => (
    <div className={classes.page}>
      <ProgressBar currentSelectedStepNumber={currentLevel} numSteps={numLevels} />
      <div className={classes.instructions} border={{ color: 'none', size: 'small' }} round='small'>
        <span className={classes.instructions} spanAlign='center'>{instructions}</span>
      </div>
      <div className={classes.flexCenter}>
        <Workspace />
      </div>
    </div>
  );

const styles = {
  page: {
    width: '100vw',
    minHeight: '100vh',
    padding: 35,
    boxSizing: 'border-box',
    '& > *': {
      boxSizing: 'border-box'
    },
  },
  workspace: {
    width: 600,
    height: 500,
    margin: 5,
    marginTop: 10,
    backgroundColor: 'white',
  },
  instructions: {
    width: '50%',
    height: 60,
    marginTop: 10,
    padding: 10,
    backgroundColor: '#88E7E0',
  },
  button: {
    margin: 5,
    marginTop: 10,
    width: '20%',
  },
  flexCenter: {
    float: 'right',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridDisplay: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
  }
}

export default injectSheet(styles)(ActivityPageWithClasses);