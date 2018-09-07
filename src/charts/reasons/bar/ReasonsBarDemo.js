import React, { Component, Fragment } from 'react'
import { sortBy } from 'lodash'
import ThemeSwitcher from '../../../components/ThemeSwitcher'
import Filters from '../../../components/Filters'
import Switch from '../../../components/Switch'
import data from '../reasonsData'
import ReasonsMirrorBar from './ReasonsMirrorBar'

const libraries = data.map(d => d.id)

export default class ReasonsBarDemo extends Component {
    state = {
        library: libraries[0],
        sortByRank: false,
        withEmojis: true,
    }

    handleSortSwitch = sortByRank => {
        this.setState({ sortByRank })
    }

    handleEmojisSwitch = withEmojis => {
        this.setState({ withEmojis })
    }

    handleLibrarySelection = library => {
        this.setState({ library })
    }

    render() {
        const { library, sortByRank, withEmojis } = this.state

        const libData = data.find(d => d.id === library)

        let positiveData
        let negativeData
        if (sortByRank === true) {
            positiveData = sortBy(libData.positive, d => d.count)
            negativeData = sortBy(libData.negative, d => d.count)
        } else {
            positiveData = [...libData.positive].reverse()
            negativeData = [...libData.negative].reverse()
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
                        <ReasonsMirrorBar
                            library={library}
                            libraries={libraries}
                            positiveData={positiveData}
                            negativeData={negativeData}
                            withEmojis={withEmojis}
                            onLibrarySelection={this.handleLibrarySelection}
                            theme={theme}
                        />
                    </Fragment>
                )}
            </ThemeSwitcher>
        )
    }
}
