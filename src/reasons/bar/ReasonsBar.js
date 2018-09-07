import React, { Component, Fragment } from 'react'
import { sortBy } from 'lodash'
import ThemeSwitcher from '../../components/ThemeSwitcher'
import Filters from '../../components/Filters'
import Switch from '../../components/Switch'
import PeriodicTableElement from '../../components/PeriodicTableElement'
import { ResponsiveBar } from '@nivo/bar'
import data from '../reasonsData'

export default class ReasonsBar extends Component {
    state = {
        sortByRank: false,
    }

    handleSortSwitch = sortByRank => {
        this.setState({ sortByRank })
    }

    render() {
        const { sortByRank } = this.state

        let positiveData
        let negativeData
        if (sortByRank === true) {
            positiveData = sortBy(data.positive, d => d.count)
            negativeData = sortBy(data.negative, d => d.count)
        } else {
            positiveData = [...data.positive].reverse()
            negativeData = [...data.negative].reverse()
        }

        return (
            <ThemeSwitcher>
                {({theme}) => (
                    <Fragment>
                        <Filters>
                            <Switch
                                id="sortByRank"
                                label="sort by rank"
                                checked={sortByRank}
                                onChange={this.handleSortSwitch}
                            />
                        </Filters>
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 80px 1fr',
                                gridColumnGap: '10px',
                                gridRowGap: '20px',
                            }}
                        >
                            <div style={{ textAlign: 'right' }}>
                                what people disliked about it
                            </div>
                            <div/>
                            <div>
                                what people liked about it
                            </div>
                            <div style={{ height: data.negative.length * 30 }}>
                                <ResponsiveBar
                                    layout="horizontal"
                                    enableGridX={true}
                                    enableGridY={false}
                                    enableLabel={false}
                                    labelSkipWidth={36}
                                    reverse={true}
                                    theme={theme}
                                    colors={theme.satisfactionColors[1]}
                                    data={negativeData}
                                    padding={0.8}
                                    borderRadius={2.5}
                                    keys={['count']}
                                    indexBy="reason"
                                    margin={{
                                        right: 5,
                                        bottom: 40,
                                        left: 260,
                                    }}
                                    axisLeft={{
                                        tickSize: 0,
                                        tickPadding: 10,
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <PeriodicTableElement
                                    id="Re"
                                    size={80}
                                />
                            </div>
                            <div style={{ height: data.positive.length * 30 }}>
                                <ResponsiveBar
                                    layout="horizontal"
                                    enableGridX={true}
                                    enableGridY={false}
                                    enableLabel={false}
                                    labelSkipWidth={36}
                                    theme={theme}
                                    colors={theme.satisfactionColors[0]}
                                    data={positiveData}
                                    padding={0.8}
                                    borderRadius={2.5}
                                    keys={['count']}
                                    indexBy="reason"
                                    margin={{
                                        right: 260,
                                        bottom: 40,
                                        left: 5,
                                    }}
                                    axisRight={{
                                        tickSize: 0,
                                        tickPadding: 10,
                                    }}
                                    axisLeft={null}
                                />
                            </div>
                        </div>
                    </Fragment>
                )}
            </ThemeSwitcher>
        )
    }
}
