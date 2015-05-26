var React = require('react')
var Stopwatch = require('../Stopwatch')

class Timer extends React.Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      time: 0,
      timerRunning: false
    }
  }
  startTimer(){
    var seconds = this.refs.timeInput.getDOMNode().value || 0
    this.setState({time: seconds, timerRunning: true})
  }
  onReset(){
    this.setState({timerRunning: false})
  }
  render(){
    if(this.state.timerRunning){
      return (
        <div className="timer">
          <Stopwatch seconds={this.state.time}
                     formatTime={(initial, elapsed) => initial - elapsed + ' seconds left'}
                     onReset={this.onReset.bind(this)}
                     />
        </div>
      )
    } else {
      return (
        <div className="timer">
          <input type="number" defaultValue={this.state.time} ref="timeInput" />
          <button onClick={this.startTimer.bind(this)}>Set Time</button>
        </div>
      )
    }
  }
}

Timer.PropTypes = {}
Timer.defaultProps = {}

module.exports = Timer