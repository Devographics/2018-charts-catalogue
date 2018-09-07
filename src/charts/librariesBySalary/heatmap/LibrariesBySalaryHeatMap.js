import React, { Component, Fragment } from 'react'
import { sortBy } from 'lodash'
import { HeatMap } from '@nivo/heatmap'
import ThemeSwitcher from '../../../components/ThemeSwitcher'
import PeriodicTableElement from '../../../components/PeriodicTableElement'
import Filters from '../../../components/Filters'
import Switch from '../../../components/Switch'
import data, { salaryKeys } from '../librariesBySalaryData'

const libs = data.map(d => d.id)

const normalizedData = [...salaryKeys].reverse().map(salaryRange =>
    data.reduce(
        (acc, d) => ({
            ...acc,
            [d.id]: d.bins.find(b => b.id === salaryRange).percentage,
        }),
        { salaryRange }
    )
)

export default class LibrariesBySalaryHeatMap extends Component {
    state = {
        relative: false,
    }

    handleRelativeSwitch = relative => {
        this.setState({ relative })
    }

    render() {
        return (
            <ThemeSwitcher>
                {({ theme }) => (
                    <Fragment>
                        <Filters>
                            <Switch
                                id="relative"
                                label="relative"
                                checked={true}
                                onChange={this.handleRelativeSwitch}
                            />
                        </Filters>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                padding: '30px 180px 30px 0',
                            }}
                        >
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: `180px ${libs.length * 52}px`,
                                    gridTemplateRows: `52px ${normalizedData.length * 52}px`,
                                }}
                            >
                                <span />
                                <div
                                    style={{
                                        display: 'flex',
                                    }}
                                >
                                    {libs.map(lib => (
                                        <PeriodicTableElement
                                            key={lib}
                                            id={lib.slice(0, 2)}
                                            size={52}
                                        />
                                    ))}
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    {[...salaryKeys].reverse().map((salaryRange, i) => (
                                        <div
                                            key={salaryRange}
                                            style={{
                                                fontSize: '13px',
                                                fontWeight: 500,
                                                textAlign: 'right',
                                                height: 52,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'flex-end',
                                                padding: '0 15px',
                                                //border: '1px solid #999',
                                            }}
                                        >
                                            {salaryRange}
                                        </div>
                                    ))}
                                </div>
                                <HeatMap
                                    theme={theme}
                                    colors={[
                                        '#000',
                                        '#111',
                                        '#222',
                                        '#333',
                                        '#444',
                                        '#555',
                                        '#666',
                                        '#777',
                                        '#888',
                                        '#999',
                                    ]}
                                    width={libs.length * 52}
                                    height={normalizedData.length * 52}
                                    keys={libs}
                                    indexBy="salaryRange"
                                    data={normalizedData}
                                    cellHoverOthersOpacity={0.75}
                                    minValue={0}
                                    maxValue={100}
                                />
                            </div>
                        </div>
                    </Fragment>
                )}
            </ThemeSwitcher>
        )
    }
}
