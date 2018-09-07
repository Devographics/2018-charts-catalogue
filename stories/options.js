import React from 'react'
import { storiesOf } from '@storybook/react'
import OptionsRadarSingleItem from '../src/charts/options/radar/OptionsRadarSingleItem'
import OptionsRadarMultiItems from '../src/charts/options/radar/OptionsRadarMultiItems'
import OptionsWaffle from '../src/charts/options/waffle/OptionsWaffle'

const stories = storiesOf('Libraries result', module)

stories.addWithChapters('Waffle', {
    subtitle: 'Library results using multiple waffle charts',
    info: `
            **[DISCLAIMER] this is a demo, the data shown here are fake and do not reflect actual survey results!**
        
            > A waffle chart shows progress towards a target or a completion percentage.
            There is a grid of small cells, of which coloured cells represent the data.
            A chart can consist of one category or several categories.
            Multiple waffle charts can be put together to show a comparison between different charts.
            
            > *from [datavizproject](https://datavizproject.com/)*
            
            We can switch to comparison mode in order to compare with previous survey results.
        `,
    chapters: [
        {
            sections: [
                {
                    sectionFn: () => <OptionsWaffle />,
                },
            ],
        },
    ],
})

stories.addWithChapters('Radar', {
    subtitle: 'Displaying selected options using a radar chart',
    info: `
            **[DISCLAIMER] this is a demo, the data shown here are fake and do not reflect actual survey results!**

            > Radar Charts are a way of comparing multiple quantitative variables.
            This makes them useful for seeing which variables have similar values
            or if there are any outliers amongst each variable.
            Radar Charts are also useful for seeing which variables are scoring high
            or low within a dataset, making them ideal for displaying performance.
            
            > *from [datavizcatalogue](https://datavizcatalogue.com/)*
        `,
    chapters: [
        {
            sections: [
                {
                    title: 'For a single item',
                    sectionFn: () => <OptionsRadarSingleItem />,
                },
                {
                    title: 'For several items in a category',
                    sectionFn: () => <OptionsRadarMultiItems />,
                },
            ],
        },
    ],
})
