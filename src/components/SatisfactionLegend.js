import React, { PureComponent } from 'react'
import './SatisfactionLegend.css'

export default class SatisfactionLegend extends PureComponent {
    render() {
        const { colors } = this.props

        return (
            <div className="satisfaction-legend">
                <div className="satisfaction-legend_item">
                    <span
                        className="satisfaction-legend_item_chip"
                        style={{ background: colors[1] }}
                    />
                    Used it
                    <br />
                    Would avoid
                </div>
                <div className="satisfaction-legend_item">
                    <span
                        className="satisfaction-legend_item_chip"
                        style={{ background: colors[0] }}
                    />
                    Used it
                    <br />
                    Would use again
                </div>
                <div className="satisfaction-legend_item">
                    <span
                        className="satisfaction-legend_item_chip"
                        style={{ background: colors[3] }}
                    />
                    Heard of it
                    <br />
                    Not interested
                </div>
                <div className="satisfaction-legend_item">
                    <span
                        className="satisfaction-legend_item_chip"
                        style={{ background: colors[2] }}
                    />
                    Heard of it
                    <br />
                    Would like to learn
                </div>
                <div className="satisfaction-legend_item">
                    <span
                        className="satisfaction-legend_item_chip"
                        style={{ background: colors[4] }}
                    />
                    Never heard of it
                    <br />
                    Not sure what it is
                </div>
            </div>
        )
    }
}
