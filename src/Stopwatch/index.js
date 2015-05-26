var React = require('react')

class Stopwatch extends React.Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      elapsedTime: 0,
      clockRunning: false
    }
  }
  updateTime(){
    if(this.state.clockRunning){
      var currentTime = Date.now()
      var newElapsedTime = this.elapsedBeforeStart + (currentTime - this.lastStartedAt) / 1000
      this.setState({elapsedTime: Math.round(newElapsedTime)})
      setTimeout(this.updateTime.bind(this), 1000)
    }
  }
  startClock(){
    this.lastStartedAt = Date.now()
    this.elapsedBeforeStart = this.state.elapsedTime
    this.setState({clockRunning: true})
  }
  componentDidUpdate(prevProps, prevState){
    if(!prevState.clockRunning && this.state.clockRunning){
      this.updateTime()
    }
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
          {this.props.seconds + this.state.elapsedTime}
        </span>
        <br />

        { this.state.clockRunning ?
            <button onClick={this.pauseClock.bind(this)}>Pause</button>
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