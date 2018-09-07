import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ResponsiveWaffleCanvas } from '@nivo/waffle'
import PeriodicTableElement from '../../../components/PeriodicTableElement'
import { mapData } from './dto'
import { yearDataPropType, supportedYears } from './props'

export default class OptionsWaffleLibrarySingleYear extends PureComponent {
    static propTypes = {
        data: PropTypes.shape({
            id: PropTypes.string.isRequired,
            '2017': yearDataPropType.isRequired,
            '2018': yearDataPropType.isRequired,
        }).isRequired,
        year: PropTypes.oneOf(supportedYears).isRequired,
        theme: PropTypes.object.isRequired,
    }

    render() {
        const { data, theme, year } = this.props

        return (
            <div className="options-waffle-library_single">
                <span />
                <div>
                    <ResponsiveWaffleCanvas
                        rows={12}
                        columns={10}
                        colors={theme.satisfactionColors}
                        emptyColor="rgb(216, 216, 216)"
                        theme={theme}
                        {...mapData(data, year)}
                    />
                </div>
                <PeriodicTableElement index={1} id="Br" label={data.id} size={32} />
                <h3 className="options-waffle-library_title">{data.id}</h3>
            </div>
        )
    }
}
