import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './OptionsWaffleLibrary.css'
import { yearDataPropType } from './props'
import OptionsWaffleLibrarySingleYear from './OptionsWaffleLibrarySingleYear'
import OptionsWaffleLibraryMultiYears from './OptionsWaffleLibraryMultiYears'

export default class OptionsWaffleLibrary extends PureComponent {
    static propTypes = {
        data: PropTypes.shape({
            id: PropTypes.string.isRequired,
            '2017': yearDataPropType.isRequired,
            '2018': yearDataPropType.isRequired,
        }).isRequired,
        theme: PropTypes.object.isRequired,
        compare: PropTypes.bool.isRequired,
    }

    render() {
        const { data, theme, compare } = this.props

        if (compare === true) {
            return (
                <OptionsWaffleLibraryMultiYears
                    data={data}
                    years={['2018', '2017']}
                    theme={theme}
                />
            )
        }

        return <OptionsWaffleLibrarySingleYear data={data} year={'2018'} theme={theme} />
    }
}
