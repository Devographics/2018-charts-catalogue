import React, { Fragment } from 'react'
import { ResponsiveWaffleCanvas } from '@nivo/waffle'
import PeriodicTableElement from '../../components/PeriodicTableElement'
import './OptionsWaffleLibrary.css'

const mapData = (datum, year) => ({
    data: [
        {
            id: 'wouldUse',
            label: 'Used it > Would use again',
            value: datum[year].wouldUse,
        },
        {
            id: 'wouldNotUse',
            label: 'Used it > Would avoid',
            value: datum[year].wouldNotUse,
        },
        {
            id: 'likeToLearn',
            label: 'Heard of it > Would like to learn',
            value: datum[year].likeToLearn,
        },
        {
            id: 'notInterested',
            label: 'Heard of it > Not interested',
            value: datum[year].notInterested,
        },
        {
            id: 'neverHeard',
            label: 'Never heard of it/Not sure what it is',
            value: datum[year].neverHeard,
        },
    ],
    total: datum[year].wouldUse +
        datum[year].wouldNotUse +
        datum[year].likeToLearn +
        datum[year].notInterested +
        datum[year].neverHeard,
})

const OptionsWaffleLibrarySingle = ({ datum, theme, year }) => (
    <div className="options-waffle-library_single">
        <span/>
        <div>
            <ResponsiveWaffleCanvas
                rows={12}
                columns={10}
                colors={theme.satisfactionColors}
                emptyColor="rgb(216, 216, 216)"
                theme={theme}
                {...mapData(datum, year)}
            />
        </div>
        <PeriodicTableElement
            index={1}
            id="Br"
            label={datum.id}
            size={32}
        />
        <h3 className="options-waffle-library_title">{datum.id}</h3>
    </div>
)

const OptionsWaffleLibraryMulti = ({ datum, theme, years }) => (
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
                    {...mapData(datum, year)}
                />
            </Fragment>
        ))}
        <PeriodicTableElement
            index={1}
            id="Br"
            label={datum.id}
            size={32}
        />
        <h3 className="options-waffle-library_title">{datum.id}</h3>
    </div>
)

const OptionsWaffleLibrary = ({ datum, theme, compare }) => {
    if (compare === true) {
        return (
            <OptionsWaffleLibraryMulti
                datum={datum}
                theme={theme}
                years={['2018', '2017']}
            />
        )
    }

    return (
        <OptionsWaffleLibrarySingle
            datum={datum}
            theme={theme}
            year={'2018'}
        />
    )
}

export default OptionsWaffleLibrary