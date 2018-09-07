import React, { Component, Fragment } from 'react'
import { sortBy } from 'lodash'
import { ResponsiveStream } from '@nivo/stream'
import ThemeSwitcher from '../../../components/ThemeSwitcher'
import Filters from '../../../components/Filters'
import Switch from '../../../components/Switch'
import data, { salaryKeys } from '../librariesBySalaryData'

export default class LibrariesBySalaryStream extends Component {
    state = {
        relative: false,
    }

    handleRelativeSwitch = relative => {
        this.setState({ relative })
    }

    render() {
        const { relative } = this.state

        const normData = sortBy(data, 'average').map(d => d.bins.reduce((acc, s) => ({
            ...acc,
            id: d.id,
            average: d.average,
            [s.id]: s.count,
        }), {}))

        return (
            <ThemeSwitcher>
                {({ theme }) => (
                    <Fragment>
                        <Filters>
                            <Switch
                                id="relative"
                                label="relative"
                                checked={relative}
                                onChange={this.handleRelativeSwitch}
                            />
                        </Filters>
                        <div
                            style={{
                                height: 400,
                            }}
                        >
                            <ResponsiveStream
                                theme={theme}
                                offsetType={relative === true ? 'wiggle' : 'expand'}
                                colors={theme.salaryColors}
                                curve="monotoneX"
                                margin={{
                                    top: 60,
                                    right: 100,
                                    bottom: 60,
                                    left: 100,
                                }}
                                keys={salaryKeys}
                                data={normData}
                                axisTop={{
                                    format: i => `${'$'}${normData[Number(i)].average},000`,
                                }}
                                axisBottom={{
                                    format: i => normData[Number(i)].id,
                                }}
                            />
                        </div>
                    </Fragment>
                )}
            </ThemeSwitcher>
        )
    }
}
