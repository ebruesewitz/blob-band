import React from 'react';
import cx from 'classnames';
import injectSheet from 'react-jss';
import {colors} from '../constants';

const ButtonWithClasses = ({
  classes,
  label,
  onClick,
  primary,
  className,
}) => (
  <button 
    className={cx(
      className,
      classes.buttonStyles, 
      {
        [classes.primaryStyles]: primary,
        [classes.secondaryStyles]: !primary
      }
    )} 
    onClick={onClick}
  >
    {label}
  </button>
);

const styles = {
  buttonStyles: {
    borderRadius: 18,
    display: 'inline-block',
    boxSizing: 'border-box',
    cursor: 'pointer',
    outline: 'none',
    font: 'inherit',
    textDecoration: 'none',
    margin: 0,
    background: 'transparent',
    overflow: 'visible',
    textTransform: 'none',
    border: `2px solid ${colors.purple}`,
    padding: '4px 22px',
    fontSize: 18,
    transition: '0.1s ease-in-out',
    minWidth: 100,
    '&:hover': {
      boxShadow: `0px 0px 0px 2px ${colors.purple}`,
    },
  },
  primaryStyles: {
    backgroundColor: colors.purple,
    color: colors.white,
  },
  secondaryStyles: {
    color: colors.white,
    border: `2px solid ${colors.white}`,
    '&:hover': {
      boxShadow: `0px 0px 0px 2px ${colors.white}`,
    },
  },
}

export default injectSheet(styles)(ButtonWithClasses)