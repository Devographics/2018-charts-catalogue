import React, { Fragment } from 'react'
import { ResponsiveRadar } from '@nivo/radar'
import ThemeSwitcher from '../../../components/ThemeSwitcher'
import SatisfactionLegend from '../../../components/SatisfactionLegend'
import { singleItemOptions } from '../optionsData'

const data = singleItemOptions

const OptionsRadarSingleItem = () => (
    <ThemeSwitcher>
        {({ theme }) => (
            <Fragment>
                <div style={{ height: 320 }}>
                    <ResponsiveRadar
                        margin={{
                            top: 40,
                            right: 200,
                            bottom: 40,
                            left: 200,
                        }}
                        gridLevels={1}
                        indexBy="id"
                        colors={theme.name === 'light' ? '#333' : 'white'}
                        data={data}
                        keys={['React']}
                        gridShape="linear"
                        theme={theme}
                        gridLabelOffset={14}
                        gridLabel={props => {
                            // id
                            return <circle r={8} fill="red" />
                        }}
                    />
                </div>
                <SatisfactionLegend colors={theme.satisfactionColors} />
            </Fragment>
        )}
    </ThemeSwitcher>
)

export default OptionsRadarSingleItem
