import React, { PureComponent } from 'react'
import './Switch.css'

export default class Switch extends PureComponent {
    handleChange = event => {
        this.props.onChange(event.target.checked)
    }

    render() {
        const { id, label, checked } = this.props

        return (
            <div className="switch_wrapper">
                <span className="switch">
                    <input
                        className="switch_toggle"
                        id={id}
                        checked={checked}
                        onChange={this.handleChange}
                        type="checkbox"
                    />
                    <label
                        htmlFor={id}
                        className={`switch_container${checked ? ' _is-checked' : ''}`}
                    >
                        <span className={`switch_pin${checked ? ' _is-checked' : ''}`} />
                    </label>
                </span>
                <label className={`switch_label${checked ? ' _is-checked' : ''}`} htmlFor={id}>
                    {label}
                </label>
            </div>
        )
    }
}
