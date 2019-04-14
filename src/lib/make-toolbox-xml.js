import ScratchBlocks from 'scratch-blocks';

const categorySeparator = '<sep gap="36"/>';

const blockSeparator = '<sep gap="36"/>'; // At default scale, about 28px

const xmlEscape = function (unsafe) {
    return unsafe.replace(/[<>&'"]/g, c => {
        switch (c) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '&': return '&amp;';
        case '\'': return '&apos;';
        case '"': return '&quot;';
        }
    });
};


const events = function (isStage) {
    return `
    <category name="%{BKY_CATEGORY_EVENTS}" id="events" colour="#8A70CE" secondaryColour="#625091">
        <block type="event_whenflagclicked"/>
    </category>
    `;
};

const control = function (isStage) {
    return `
    <category name="%{BKY_CATEGORY_CONTROL}" id="control" colour="#F3B476" secondaryColour="#B17131">
        <block type="control_repeat">
            <value name="TIMES">
                <shadow type="math_whole_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        ${categorySeparator}
    </category>
    `;
};

const blobBlocks = function() {
    return `
    <category name="Blob Band" id="blobBand" colour="#88E7E0" secondaryColour="#73C3BD">
        <block type="control_lucy" />
        ${blockSeparator}
        <block type="control_geoff" />
        ${blockSeparator}
        <block type="control_freddie" />
        ${categorySeparator}
    </category>
    `
}

const xmlOpen = '<xml style="display: none">';
const xmlClose = '</xml>';

/**
 * @param {!boolean} isStage - Whether the toolbox is for a stage-type target.
 * @param {?string} targetId - The current editing target
 * @param {?string} categoriesXML - null for default toolbox, or an XML string with <category> elements.
 * @param {?string} costumeName - The name of the default selected costume dropdown.
 * @param {?string} backdropName - The name of the default selected backdrop dropdown.
 * @returns {string} - a ScratchBlocks-style XML document for the contents of the toolbox.
 */
const makeToolboxXML = function (isStage, targetId, categoriesXML,
    costumeName = '', backdropName = '') {
    const gap = [categorySeparator];

    costumeName = xmlEscape(costumeName);
    backdropName = xmlEscape(backdropName);

    const everything = [
        xmlOpen,
        events(isStage, targetId), gap,
        control(isStage, targetId), gap,
        blobBlocks(isStage, targetId), gap,
    ];

    if (categoriesXML) {
        everything.push(gap, categoriesXML);
    }

    everything.push(xmlClose);
    return everything.join('\n');
};

export default makeToolboxXML;
