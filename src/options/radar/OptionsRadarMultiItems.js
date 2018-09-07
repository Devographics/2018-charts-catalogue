import React from 'react'
import { Radar } from '@nivo/radar'
import ThemeSwitcher from '../../components/ThemeSwitcher'
import { multiItemsOptions } from '../optionsData'

const data = multiItemsOptions

const OptionsRadarMultiItems = () => (
    <ThemeSwitcher>
        {({ theme }) => (
            <Radar
                width={700}
                height={400}
                margin={{
                    top: 40,
                    right: 200,
                    bottom: 40,
                    left: 200,
                }}
                indexBy="id"
                data={data}
                keys={['React', 'Vue', 'ember']}
                gridShape="linear"
                legends={[
                    {
                        anchor: 'top-left',
                        direction: 'column',
                        translateX: -170,
                        itemWidth: 80,
                        itemHeight: 20,
                        itemTextColor: '#999',
                        symbolSize: 12,
                        symbolShape: 'square',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000',
                                }
                            }
                        ]
                    }
                ]}
                theme={theme}
            />
        )}
    </ThemeSwitcher>
)

export default OptionsRadarMultiItems
