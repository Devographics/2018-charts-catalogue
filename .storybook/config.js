import { configure, setAddon } from '@storybook/react'
import chaptersAddon, { setDefaults } from 'react-storybook-addon-chapters'
import { setOptions } from '@storybook/addon-options'

setOptions({
    name: 'State Of JS',
    showAddonPanel: false,
})

setDefaults({
    sectionOptions: {
        showSource: false,
        allowSourceToggling: false,
        showPropTables: false,
        allowPropTablesToggling: false,
    }
})
setAddon(chaptersAddon)

function loadStories() {
    require('../stories/options')
    require('../stories/reasons')
}

configure(loadStories, module)