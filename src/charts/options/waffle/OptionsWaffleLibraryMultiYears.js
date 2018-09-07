import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ResponsiveWaffleCanvas } from '@nivo/waffle'
import PeriodicTableElement from '../../../components/PeriodicTableElement'
import { mapData } from './dto'
import { yearDataPropType, supportedYears } from './props'

export default class OptionsWaffleLibraryMultiYears extends PureComponent {
    static propTypes = {
        data: PropTypes.shape({
            id: PropTypes.string.isRequired,
            '2017': yearDataPropType.isRequired,
            '2018': yearDataPropType.isRequired,
        }).isRequired,
        years: PropTypes.arrayOf(PropTypes.oneOf(supportedYears)).isRequired,
        theme: PropTypes.object.isRequired,
    }

    render() {
        const { data, years, theme } = this.props

        return (
            <div className="options-waffle-library_multi">
                {years.map(year => (
                    <Fragment key={year}>
                        <div className="options-waffle-library_multi_year">{year}</div>
                        <ResponsiveWaffleCanvas
                            rows={8}
                            columns={18}
                            colors={theme.satisfactionColors}
                            emptyColor="rgb(216, 216, 216)"
                            theme={theme}
                            fillDirection="left"
                            {...mapData(data, year)}
                        />
                    </Fragment>
                ))}
                <PeriodicTableElement
                    index={1}
                    id="Br"
                    label={data.id}
                    size={32}
                />
                <h3 className="options-waffle-library_title">{data.id}</h3>
            </div>
        )
    }
}
