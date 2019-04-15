import Button from './Button.jsx';
import injectSheet from 'react-jss';
import React, { Component } from 'react';
import Modal from 'react-modal';

class HintModal extends Component {
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
            <div className={classes.container}>
                <Button className={classes.button} label='Hint' onClick={this.handleOpenModal}></Button>
                <div className={classes.flexCenter}>
                    <Modal className={classes.modal}
                        isOpen={this.state.showModal}
                        style={{
                            overlay: {
                                zIndex: 1000,
                                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                            }
                        }}
                    >
                        <span className={classes.hint}>{hint}</span>
                        <Button className={classes.hintButton} label='Got it!' onClick={this.handleCloseModal}></Button>
                    </Modal>
                </div>
            </div>
        );
    }
}

const hint = 'Try dragging different blocks into the workspace. What sounds can you make?'

const styles = {
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
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
        outline: 'none !important',
    },
    button: { 
        margin: 5,
        marginTop: 10,
        width: '50%',
        padding: 12,
    },
    hintButton: { 
        margin: 5,
        marginTop: 10,
        width: '20%',
        padding: 12,
    },
    hint: {
        fontSize: 17,
        textAlign: 'center',
        fontFamily: 'Helvetica',
        padding: 10,
    },
}

export default injectSheet(styles)(HintModal);