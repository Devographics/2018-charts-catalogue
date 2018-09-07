import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { sortBy } from 'lodash'
import { TransitionMotion, spring } from 'react-motion'
import PeriodicTableElement from '../../../components/PeriodicTableElement'

export default class ReasonsMirrorBarNav extends Component {
    static propTypes = {
        height: PropTypes.number.isRequired,
        library: PropTypes.string.isRequired,
        libraries: PropTypes.arrayOf(PropTypes.string).isRequired,
        onChange: PropTypes.func.isRequired,
    }

    handleClick = lib => () => {
        this.props.onChange(lib)
    }

    render() {
        const { height, library, libraries } = this.props

        const currentIndex = libraries.indexOf(library)

        const items = []
        if (currentIndex > 0) {
            items.push({ isPrevious: true, id: libraries[currentIndex - 1] })
        }
        items.push({ isCurrent: true, id: library })
        if (currentIndex < libraries.length - 1) {
            items.push({ isNext: true, id: libraries[currentIndex + 1] })
        }

        return (
            <div
                style={{
                    width: 80,
                    height,
                    position: 'relative',
                }}
            >
                <TransitionMotion
                    willEnter={({ style }) => ({
                        size: style.size.val,
                        top: style.top.val,
                        left: style.left.val,
                        opacity: 0,
                    })}
                    willLeave={({ style }) => ({
                        ...style,
                        opacity: spring(0),
                    })}
                    styles={items.map(item => {
                        let style
                        if (item.isPrevious) {
                            style = {
                                size: spring(60),
                                top: spring(0),
                                left: spring(10),
                                opacity: spring(.6),
                            }
                        } else if (item.isCurrent) {
                            style = {
                                size: spring(80),
                                top: spring(height / 2 - 40),
                                left: spring(0),
                                opacity: spring(1),
                            }
                        } else {
                            style = {
                                size: spring(60),
                                top: spring(height - 60),
                                left: spring(10),
                                opacity: spring(.6),
                            }
                        }

                        return {
                            key: item.id,
                            data: item,
                            style,
                        }
                    })}
                >
                    {styles => (
                        <Fragment>
                            {styles.map(({ key, style, data }) => (
                                <PeriodicTableElement
                                    key={key}
                                    id={data.id.slice(0, 2)}
                                    size={style.size}
                                    style={{
                                        position: 'absolute',
                                        top: style.top,
                                        left: style.left,
                                        cursor: 'pointer',
                                        opacity: style.opacity,
                                    }}
                                    onClick={this.handleClick(data.id)}
                                />
                            ))}
                        </Fragment>
                    )}
                </TransitionMotion>
            </div>
        )
    }
}
