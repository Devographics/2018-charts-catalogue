import React, { Component, Fragment } from 'react'
import { sortBy } from 'lodash'
import ThemeSwitcher from '../../components/ThemeSwitcher'
import Filters from '../../components/Filters'
import Switch from '../../components/Switch'
import PeriodicTableElement from '../../components/PeriodicTableElement'
import { ResponsiveBar } from '@nivo/bar'
import data, { reasonsEmojis } from '../reasonsData'

export default class ReasonsBar extends Component {
    state = {
        sortByRank: false,
        withEmojis: false,
    }

    handleSortSwitch = sortByRank => {
        this.setState({ sortByRank })
    }

    handleEmojisSwitch = withEmojis => {
        this.setState({ withEmojis })
    }

    getAxisTickLabel = (invert = false) => label => {
        if (this.state.withEmojis === true) {
            return invert === true ? `${label} ${reasonsEmojis[label]}` : `${reasonsEmojis[label]} ${label}`
        }

        return label
    }

    render() {
        const { sortByRank, withEmojis } = this.state

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
                            &nbsp;&nbsp;
                            <Switch
                                id="withEmojis"
                                label="emojis"
                                checked={withEmojis}
                                onChange={this.handleEmojisSwitch}
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
                                        format: this.getAxisTickLabel(true),
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
                                        format: this.getAxisTickLabel(),
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
