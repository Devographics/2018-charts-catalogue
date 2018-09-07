import React, { Component, Fragment } from 'react'
import ThemeSwitcher from '../../../components/ThemeSwitcher'
import Filters from '../../../components/Filters'
import Switch from '../../../components/Switch'
import SatisfactionLegend from '../../../components/SatisfactionLegend'
import OptionsWaffleLibrary from './OptionsWaffleLibrary'
import data from '../optionsData'

export default class OptionsWaffle extends Component {
    state = {
        compare: false,
    }

    handleCompareSwitch = compare => {
        this.setState({ compare })
    }

    render() {
        const { compare } = this.state

        return (
            <ThemeSwitcher>
                {({theme}) => (
                    <Fragment>
                        <Filters>
                            <Switch
                                id="compare"
                                label="compare"
                                checked={compare}
                                onChange={this.handleCompareSwitch}
                            />
                        </Filters>
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                                gridColumnGap: '30px',
                                gridRowGap: '30px',
                            }}
                        >
                            {data.map(datum => (
                                <OptionsWaffleLibrary
                                    key={datum.id}
                                    datum={datum}
                                    compare={compare}
                                    theme={theme}
                                />
                            ))}
                        </div>
                        <SatisfactionLegend colors={theme.satisfactionColors}/>
                    </Fragment>
                )}
            </ThemeSwitcher>
        )
    }
}
