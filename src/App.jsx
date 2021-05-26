import React, { Component } from 'react'

export class App extends Component {
  state = {
    hue: 0,
    saturation: 0,
    lightness: 0,
  }

  render() {
    return (
      <>
        <h1>Color Picker</h1>
        <h4>Color Wheel</h4>
        <div
          className="ColorRange"
          style={{ backgroundColor: `hsl${this.state.hue}, 100%, 50%` }}
        ></div>
        <p> Hue: {this.state.hue}</p>
        <input
          max={359}
          type="range"
          value={this.state.hue}
          onChange={event => this.setState({ hue: event.target.value })}
        />
        <p> Saturation: {this.state.saturation}</p>
        <input
          max={100}
          type="range"
          value={this.state.saturation}
          onChange={event => this.setState({ saturation: event.target.value })}
        />
        <p> Lightness: {this.state.lightness}</p>
        <input
          max={100}
          type="range"
          value={this.state.lightness}
          onChange={event => this.setState({ lightness: event.target.value })}
        />
      </>
    )
  }
}

export default App
