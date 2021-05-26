import React, { Component } from 'react'

export class App extends Component {
  state = {
    hue: 0,
    saturation: 0,
    lightness: 0,

    handleButtonClick = async () => {
      const Hue = Math.floor(Math.random() * (359 - 1) + 1);
      const Saturation = Math.floor(Math.random() * (100 - 1) + 1);
      const Lightness = Math.floor(Math.random() * (100 - 1) + 1);
    }
  }

  render() {
    const newBackgroundColor = `hsl(${this.state.hue},${this.state.saturation}%,${this.state.lightness}%)`

    const newStyle = { backgroundColor: newBackgroundColor }
    return (
      <>
        <h1>Color Picker</h1>
        <h4>Color Wheel</h4>
        <div className="ColorRange" style={newStyle}>
          {`hsl(${this.state.hue},${this.state.saturation}%,${this.state.lightness}%)`}
        </div>
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
        <button>
          Randomize!
        </button>
      </>
    )
  }
}

export default App
