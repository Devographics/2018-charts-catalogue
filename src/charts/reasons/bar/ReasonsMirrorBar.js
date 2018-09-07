import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { sortBy } from 'lodash'
import { ResponsiveBar } from '@nivo/bar'
import { reasonsEmojis } from '../reasonsData'
import ReasonsMirrorBarNav from './ReasonsMirrorBarNav'

const marginBottom = 40
const innerMargin = 5
const outerMargin = 260

export default class ReasonsMirrorBar extends Component {
    static propTypes = {
        library: PropTypes.string.isRequired,
        libraries: PropTypes.arrayOf(PropTypes.string).isRequired,
        positiveData: PropTypes.arrayOf(
            PropTypes.shape({
                reason: PropTypes.string.isRequired,
                count: PropTypes.number.isRequired,
            })
        ).isRequired,
        negativeData: PropTypes.arrayOf(
            PropTypes.shape({
                reason: PropTypes.string.isRequired,
                count: PropTypes.number.isRequired,
            })
        ).isRequired,
        withEmojis: PropTypes.bool.isRequired,
        onLibrarySelection: PropTypes.func.isRequired,
        theme: PropTypes.object.isRequired,
    }

    getAxisTickLabel = (invert = false) => label => {
        if (this.props.withEmojis === true) {
            return invert === true ? `${label} ${reasonsEmojis[label]}` : `${reasonsEmojis[label]} ${label}`
        }

        return label
    }

    render() {
        const {
            library,
            libraries,
            positiveData,
            negativeData,
            onLibrarySelection,
            theme,
        } = this.props

        const negativeHeight = negativeData.length * 30 + marginBottom
        const positiveHeight = positiveData.length * 30 + marginBottom
        const navHeight = Math.max(negativeHeight, positiveHeight) - marginBottom

        return (
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
                <div style={{ height: negativeHeight }}>
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
                            right: innerMargin,
                            bottom: marginBottom,
                            left: outerMargin,
                        }}
                        axisLeft={{
                            tickSize: 0,
                            tickPadding: 10,
                            format: this.getAxisTickLabel(true),
                        }}
                    />
                </div>
                <ReasonsMirrorBarNav
                    height={navHeight}
                    library={library}
                    libraries={libraries}
                    onChange={onLibrarySelection}
                />
                <div style={{ height: positiveHeight }}>
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
                            right: outerMargin,
                            bottom: marginBottom,
                            left: innerMargin,
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
        )
    }
}
