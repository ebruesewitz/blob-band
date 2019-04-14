import React from 'react';
import injectSheet from 'react-jss';
import Button from './Button.jsx';
import * as titleImage from './title.png';

class TitlePageWithClasses extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const {
            classes,
            onClick
        } = this.props;
        return (
            <div className={classes.page}>
                <Button className={classes.button} label="Let's get started!" primary='true' onClick={onClick}/>
            </div>
        )
    }
}

const background = titleImage;

const styles = {
    page: {
        height: '100%',
        display: 'flex',
        position: 'fixed',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        minHeight: '100vh',
        padding: 35,
        boxSizing: 'border-box',
        '& > *': {
            boxSizing: 'border-box'
        },
        backgroundColor: '#474646',
        backgroundImage: "url(" + background + ")",
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
    },
    button: {
        margin: 5,
        marginTop: 10,
        position: 'fixed',
        top: '75%',
    },
    title: {
        fontFamily: 'Knewave',
        fontSize: '100px',
        '-webkit-transform': 'rotate(-15deg)',
        '-moz-transform': 'rotate(-15deg)',
        display: 'block',
    },
    title2: {
        fontFamily: 'Knewave',
        fontSize: '60px',
        '-webkit-transform': 'rotate(-15deg)',
        '-moz-transform': 'rotate(-15deg)',
        display: 'block',
    },
}

export default injectSheet(styles)(TitlePageWithClasses);