// Write your code here

import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {meter: 0}

  accelerate = () => {
    const {meter} = this.state
    if (meter < 200) {
      this.setState(prevState => ({meter: prevState.meter + 10}))
    }
  }

  brake = () => {
    const {meter} = this.state
    if (meter > 0) {
      this.setState(prevState => ({meter: prevState.meter - 10}))
    }
  }

  render() {
    const {meter} = this.state
    return (
      <div className="container">
        <h1 className="main">Speedometer</h1>
        <img
          alt="Speedometer"
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <div className="con-2">
          <h1 className="heading">Speed is {meter}mph</h1>
          <p>Min limit is 0mph, Max limit is 200mph</p>
          <div>
            <button
              onClick={this.accelerate}
              className="button-one"
              type="button"
            >
              Accelerate
            </button>
            <button onClick={this.brake} className="button-two" type="button">
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
