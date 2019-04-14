import { Button } from './Button.jsx';
import injectSheet from 'react-jss';
import React, { Component } from 'react';
import Modal from 'react-modal';
import * as constants from '../assets/textOptions'

class ConclustionModal extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        const {
            classes,
        } = this.props;
        return (
            <div>
                {/* <Button className={classes.button} label='Conclusion' onClick={this.handleOpenModal}></Button> */}
                <div className={classes.flexCenter}>
                    <Modal className={classes.modal}
                        isOpen={this.state.showModal}
                    >
                        <p className={classes.hint}>{constants.conclustionText}</p>
                        <div className={classes.girdDisplay}>
                            <Button className={classes.button} label='Start Over' onClick={this.handleCloseModal}></Button>
                            <Button className={classes.buttonRight} label='Keep Playing' onClick={this.handleCloseModal}></Button>
                        </div>
                    </Modal>
                </div>
            </div>
        );
    }
}

const styles = {
    flexCenter: {
        position: 'absolute',
        top: '50%',
        left: '50%',
    },
    modal: {
        width: '40%',
        height: '40%',
        position: 'fixed',
        top: '25%',
        right: '30%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '5px',
        borderStyle: 'solid',
        borderColor: 'grey',
        borderWidth: 2,
        outline: 'none !important',
    },
    button: {
        margin: 5,
        marginTop: 10,
    },
    buttonRight: {
        margin: 5,
        marginTop: 10,
        float: 'right',
    },
    hint: {
        fontFamily: 'Roboto',
    },
    girdDisplay: {
        display: 'grid',
        gridTemplateColumns: 'auto auto',
    }
}

export default injectSheet(styles)(ConclustionModal);