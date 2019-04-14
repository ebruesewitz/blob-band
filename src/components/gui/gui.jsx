import classNames from 'classnames';
import omit from 'lodash.omit';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {defineMessages, FormattedMessage, injectIntl, intlShape} from 'react-intl';
import {connect} from 'react-redux';
import MediaQuery from 'react-responsive';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import tabStyles from 'react-tabs/style/react-tabs.css';
import VM from 'scratch-vm';
import Renderer from 'scratch-render';

import Blocks from '../../containers/blocks.jsx';
import StageWrapper from '../../containers/stage-wrapper.jsx';
import Box from '../box/box.jsx';

import Alerts from '../../containers/alerts.jsx';
import DragLayer from '../../containers/drag-layer.jsx';

import ProgressBar from '../../customComponents/components/ProgressBar.jsx';
import {instructions} from '../../customComponents/constants.js';
import injectSheet from 'react-jss';

import layout, {STAGE_SIZE_MODES} from '../../lib/layout-constants';
import {resolveStageSize} from '../../lib/screen-utils';

import styles from './gui.css';
import codeIcon from './icon--code.svg';

import TitlePage from '../../customComponents/components/TitlePage.jsx'

const messages = defineMessages({
    addExtension: {
        id: 'gui.gui.addExtension',
        description: 'Button to add an extension in the target pane',
        defaultMessage: 'Add Extension'
    }
});

// Cache this value to only retrieve it once the first time.
// Assume that it doesn't change for a session.
let isRendererSupported = null;

class GUIComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentSelectedStep: 0,
        }
        this.setCurrentSelectedStep = this.setCurrentSelectedStep.bind(this);
    }

    setCurrentSelectedStep(step){
        this.setState({currentSelectedStep: step});
    }

    render(){
        const {
            accountNavOpen,
            activeTabIndex,
            alertsVisible,
            authorId,
            authorThumbnailUrl,
            authorUsername,
            basePath,
            backdropLibraryVisible,
            backpackHost,
            backpackVisible,
            blocksTabVisible,
            cardsVisible,
            canCreateNew,
            canEditTitle,
            canRemix,
            canSave,
            canCreateCopy,
            canShare,
            canUseCloud,
            children,
            connectionModalVisible,
            costumeLibraryVisible,
            costumesTabVisible,
            enableCommunity,
            intl,
            isCreating,
            isFullScreen,
            isPlayerOnly,
            isRtl,
            isShared,
            loading,
            renderLogin,
            numLevels=10,
            onClickAccountNav,
            onCloseAccountNav,
            onLogOut,
            onOpenRegistration,
            onToggleLoginOpen,
            onUpdateProjectTitle,
            onActivateCostumesTab,
            onActivateSoundsTab,
            onActivateTab,
            onClickLogo,
            onExtensionButtonClick,
            onProjectTelemetryEvent,
            onRequestCloseBackdropLibrary,
            onRequestCloseCostumeLibrary,
            onRequestCloseTelemetryModal,
            onSeeCommunity,
            onShare,
            onTelemetryModalCancel,
            onTelemetryModalOptIn,
            onTelemetryModalOptOut,
            showComingSoon,
            soundsTabVisible,
            stageSizeMode,
            targetIsStage,
            telemetryModalVisible,
            tipsLibraryVisible,
            vm,
            classes,
            blockData,
            ...componentProps
        } = omit(this.props, 'dispatch');
        if (children) {
            return <Box {...componentProps}>{children}</Box>;
        }

        const tabClassNames = {
            tabs: styles.tabs,
            tab: classNames(tabStyles.reactTabsTab, styles.tab),
            tabList: classNames(tabStyles.reactTabsTabList, styles.tabList),
            tabPanel: classNames(tabStyles.reactTabsTabPanel, styles.tabPanel),
            tabPanelSelected: classNames(tabStyles.reactTabsTabPanelSelected, styles.isSelected),
            tabSelected: classNames(tabStyles.reactTabsTabSelected, styles.isSelected)
        };

        if (isRendererSupported === null) {
            isRendererSupported = Renderer.isSupported();
        }

        return (<MediaQuery minWidth={layout.fullSizeMinWidth}>{isFullSize => {
            const stageSize = resolveStageSize(stageSizeMode, isFullSize);

            return this.state.currentSelectedStep === 0 ? (
                <TitlePage onClick={()=>{this.setCurrentSelectedStep(1)}}/>
            ) : (
                <Box
                    className={styles.pageWrapper}
                    dir={isRtl ? 'rtl' : 'ltr'}
                    {...componentProps}
                >
                    <ProgressBar numSteps={numLevels} currentSelectedStepNumber={this.state.currentSelectedStep} setSelectedStep={this.setCurrentSelectedStep} />
                    <Box className={styles.bodyWrapper}>
                        <Box className={styles.flexWrapper}>
                            <div className={styles.editorWrapper}>
                                <div className={classes.instructions}>
                                    <span className={classes.instructionText}>{instructions[this.state.currentSelectedStep - 1]}</span>
                                </div>
                                <Box className={styles.editorWrapper}>
                                    <Tabs
                                        forceRenderTabPanel
                                        className={tabClassNames.tabs}
                                        selectedIndex={activeTabIndex}
                                        selectedTabClassName={tabClassNames.tabSelected}
                                        selectedTabPanelClassName={tabClassNames.tabPanelSelected}
                                        onSelect={onActivateTab}
                                    >
                                        <TabList className={tabClassNames.tabList}>
                                    <Tab className={tabClassNames.tab}>
                                        <img
                                            draggable={false}
                                            src={codeIcon}
                                        />
                                        <FormattedMessage
                                            defaultMessage="Code"
                                            description="Button to get to the code panel"
                                            id="gui.gui.codeTab"
                                        />
                                    </Tab>
                                    </TabList>
                                        <TabPanel className={tabClassNames.tabPanel}>
                                            <Box className={styles.blocksWrapper}>
                                                <Blocks
                                                    canUseCloud={canUseCloud}
                                                    grow={1}
                                                    isVisible={blocksTabVisible}
                                                    options={{
                                                        media: `${basePath}static/blocks-media/`
                                                    }}
                                                    stageSize={stageSize}
                                                    vm={vm}
                                                />
                                            </Box>
                                        </TabPanel>
                                    </Tabs>
                                </Box>
                            </div>

                            <Box className={classNames(styles.stageAndTargetWrapper, styles[stageSize])}>
                                <StageWrapper
                                    isRendererSupported={isRendererSupported}
                                    isRtl={isRtl}
                                    stageSize={stageSize}
                                    vm={vm}
                                    blockData={blockData}
                                />
                            </Box>
                        </Box>
                    </Box>
                    <DragLayer />
                </Box>
            );
        }}</MediaQuery>);
    }
};

const blobBandStyles = {
    instructions: {
        minHeight: 80,
        margin: '10px 0px',
        padding: 10,
        backgroundColor: '#88E7E0',
        fontFamily: 'Roboto',
        borderRadius: 12,
        textAlign: 'center'
    },
    instructionText: {
        fontSize: 17,
        textAlign: 'center',
        fontFamily: 'Helvetica',
    }
}

GUIComponent.propTypes = {
    accountNavOpen: PropTypes.bool,
    activeTabIndex: PropTypes.number,
    authorId: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]), // can be false
    authorThumbnailUrl: PropTypes.string,
    authorUsername: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]), // can be false
    backdropLibraryVisible: PropTypes.bool,
    backpackHost: PropTypes.string,
    backpackVisible: PropTypes.bool,
    basePath: PropTypes.string,
    blocksTabVisible: PropTypes.bool,
    canCreateCopy: PropTypes.bool,
    canCreateNew: PropTypes.bool,
    canEditTitle: PropTypes.bool,
    canRemix: PropTypes.bool,
    canSave: PropTypes.bool,
    canShare: PropTypes.bool,
    canUseCloud: PropTypes.bool,
    cardsVisible: PropTypes.bool,
    children: PropTypes.node,
    costumeLibraryVisible: PropTypes.bool,
    costumesTabVisible: PropTypes.bool,
    enableCommunity: PropTypes.bool,
    intl: intlShape.isRequired,
    isCreating: PropTypes.bool,
    isFullScreen: PropTypes.bool,
    isPlayerOnly: PropTypes.bool,
    isRtl: PropTypes.bool,
    isShared: PropTypes.bool,
    loading: PropTypes.bool,
    onActivateCostumesTab: PropTypes.func,
    onActivateSoundsTab: PropTypes.func,
    onActivateTab: PropTypes.func,
    onClickAccountNav: PropTypes.func,
    onClickLogo: PropTypes.func,
    onCloseAccountNav: PropTypes.func,
    onExtensionButtonClick: PropTypes.func,
    onLogOut: PropTypes.func,
    onOpenRegistration: PropTypes.func,
    onRequestCloseBackdropLibrary: PropTypes.func,
    onRequestCloseCostumeLibrary: PropTypes.func,
    onRequestCloseTelemetryModal: PropTypes.func,
    onSeeCommunity: PropTypes.func,
    onShare: PropTypes.func,
    onTabSelect: PropTypes.func,
    onTelemetryModalCancel: PropTypes.func,
    onTelemetryModalOptIn: PropTypes.func,
    onTelemetryModalOptOut: PropTypes.func,
    onToggleLoginOpen: PropTypes.func,
    onUpdateProjectTitle: PropTypes.func,
    renderLogin: PropTypes.func,
    showComingSoon: PropTypes.bool,
    soundsTabVisible: PropTypes.bool,
    stageSizeMode: PropTypes.oneOf(Object.keys(STAGE_SIZE_MODES)),
    targetIsStage: PropTypes.bool,
    telemetryModalVisible: PropTypes.bool,
    tipsLibraryVisible: PropTypes.bool,
    vm: PropTypes.instanceOf(VM).isRequired
};
GUIComponent.defaultProps = {
    backpackHost: null,
    backpackVisible: false,
    basePath: './',
    canCreateNew: false,
    canEditTitle: false,
    canRemix: false,
    canSave: false,
    canCreateCopy: false,
    canShare: false,
    canUseCloud: false,
    enableCommunity: false,
    isCreating: false,
    isShared: false,
    loading: false,
    onUpdateProjectTitle: () => {},
    showComingSoon: false,
    stageSizeMode: STAGE_SIZE_MODES.large
};

const mapStateToProps = state => ({
    // This is the button's mode, as opposed to the actual current state
    stageSizeMode: state.scratchGui.stageSize.stageSize,
    blockData: state.scratchGui.vm
});

const GUIComponentWithClasses = (injectIntl(connect(
    mapStateToProps
)(GUIComponent)));

export default injectSheet(blobBandStyles)(GUIComponentWithClasses)
