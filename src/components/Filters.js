import React, { PureComponent } from 'react'
import './Filters.css'

export default class Filters extends PureComponent {
    render() {
        const { children } = this.props

        return <div className="filters">{children}</div>
    }
}
