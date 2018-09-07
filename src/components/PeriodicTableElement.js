import React, { PureComponent } from 'react'
import './PeriodicTableElement.css'

export default class PeriodicTableElement extends PureComponent {
    render() {
        const { id, size } = this.props

        return (
            <div
                className="periodic-table-element"
                style={{
                    width: size,
                    height: size,
                }}
            >
                <div
                    className="periodic-table-element_index"
                    style={{
                        width: Math.round(size / 8),
                        height: Math.round(size / 8),
                        top: Math.round(size / 10),
                        left: Math.round(size / 10),
                    }}
                />
                <div
                    className="periodic-table-element_id"
                    style={{
                        fontSize: `${Math.round(size / 3)}px`,
                    }}
                >
                    {id}
                </div>
                <div
                    className="periodic-table-element_label"
                    style={{
                        width: Math.round(size / 2),
                        height: Math.round(size / 10),
                    }}
                />
            </div>
        )
    }
}