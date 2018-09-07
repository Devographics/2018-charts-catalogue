import { configure, setAddon } from '@storybook/react'
import chaptersAddon, { setDefaults } from 'react-storybook-addon-chapters'

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
}

configure(loadStories, module)