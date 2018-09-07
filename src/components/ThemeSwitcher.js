import React, { Component } from 'react'
import lightTheme from '../themes/lightTheme'
import darkTheme from '../themes/darkTheme'
import '../styles/demo.css'

const themeByName = {
    light: lightTheme,
    dark: darkTheme,
}

export default class ThemeSwitcher extends Component {
    state = {
        themeName: 'dark',
    }

    handleThemeSelection = themeName => () => {
        this.setState({ themeName })
    }

    render() {
        const { children } = this.props
        const { themeName } = this.state

        const theme = themeByName[themeName]

        return (
            <div
                className={`demo theme-${themeName}`}
            >
                <header className="demo_header">
                    <span/>
                    <div className="theme-switch">
                        theme{' '}
                        <span className="button" onClick={this.handleThemeSelection('light')}>light [2017]</span>{' '}
                        <span className="button" onClick={this.handleThemeSelection('dark')}>dark [2018?]</span>
                    </div>
                </header>
                <div className="demo_body">
                    {children({ theme })}
                </div>
            </div>
        )
    }
}