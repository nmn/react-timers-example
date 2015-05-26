var React = require('react')

class Stopwatch extends React.Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      elapsedTime: 0,
      clockRunning: false
    }
  }
  startClock(){
    this.setState({clockRunning: true})
  }
  pauseClock(){
    this.setState({clockRunning: false})
  }
  resetClock(){
    this.setState({elapsedTime: 0, clockRunning: false})
  }
  render(){
    return (
      <div className="stop-watch">
        <span className="time-display">
          {this.props.seconds}
        </span>
        <br />

        { this.state.clockRunning ?
            <button onClick={this.pauseClock.bind(this)}>Stop</button>
          :
            <button onClick={this.startClock.bind(this)}>Start</button>
        }

        <button onClick={this.resetClock.bind(this)}>Reset</button>

      </div>
    )
  }
}

Stopwatch.PropTypes = {
  seconds: React.PropTypes.number.isRequired
}

Stopwatch.defaultProps = {
  seconds: 0
}

module.exports = Stopwatch