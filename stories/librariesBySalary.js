import React from 'react'
import { storiesOf } from '@storybook/react'
import LibrariesBySalaryStream from '../src/charts/librariesBySalary/stream/LibrariesBySalaryStream'

const stories = storiesOf('Libraries by salary', module)

stories.addWithChapters(
    'Stream',
    {
        subtitle: 'Libraries results by salary range using stream chart',
        info: `
            **[DISCLAIMER] this is a demo, the data shown here are fake and do not reflect actual survey results!**
        `,
        chapters: [
            {
                sections: [
                    {
                        sectionFn: () => <LibrariesBySalaryStream/>,
                    },
                ],
            },
        ],
    }
)
