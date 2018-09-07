import React from 'react'
import { storiesOf } from '@storybook/react'
import ReasonsBar from '../src/reasons/bar/ReasonsBar'

const stories = storiesOf('Reasons behind libraries result', module)

stories.addWithChapters(
    'Bar',
    {
        subtitle: 'Reasons behind libraries results using two bar charts',
        info: `
            **[DISCLAIMER] this is a demo, the data shown here are fake and do not reflect actual survey results!**
        `,
        chapters: [
            {
                sections: [
                    {
                        sectionFn: () => <ReasonsBar/>,
                    },
                ],
            },
        ],
    }
)
