import PropTypes from 'prop-types';
import React from 'react';
import VM from 'scratch-vm';
import cx from 'classnames';

import Box from '../box/box.jsx';
import {STAGE_DISPLAY_SIZES} from '../../lib/layout-constants.js';
import StageHeader from '../../containers/stage-header.jsx';
import Stage from '../../containers/stage.jsx';
import Loader from '../loader/loader.jsx';

import Workspace from '../../customComponents/components/Workspace.jsx'
import {getStageDimensions} from '../../lib/screen-utils.js';

import styles from './stage-wrapper.css';

const StageWrapperComponent = function (props) {
    const {
        isFullScreen,
        isRtl,
        stageSize,
        vm
    } = props;

    const stageDimensions = getStageDimensions(stageSize, isFullScreen);

    return (
        <Box
            className={styles.stageWrapper}
            dir={isRtl ? 'rtl' : 'ltr'}
        >
            <Box className={styles.stageMenuWrapper}>
                <StageHeader
                    stageSize={stageSize}
                    vm={vm}
                />
            </Box>
            <div
                style={{
                    minHeight: stageDimensions.height,
                    minWidth: stageDimensions.width
                }}

                className={cx({
                    [styles.stageWrapper]: !isFullScreen,
                })}
            >
                <Workspace/>
            </div>
        </Box>
    );
};

StageWrapperComponent.propTypes = {
    isFullScreen: PropTypes.bool,
    isRendererSupported: PropTypes.bool.isRequired,
    isRtl: PropTypes.bool.isRequired,
    loading: PropTypes.bool,
    stageSize: PropTypes.oneOf(Object.keys(STAGE_DISPLAY_SIZES)).isRequired,
    vm: PropTypes.instanceOf(VM).isRequired
};

export default StageWrapperComponent;
