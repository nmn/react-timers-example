var React = require('react')
var Stopwatch = require('./Stopwatch')
var Timer = require('./Timer')

React.render(
  <div>
    <div className="Stopwatch">
      <h1>Stopwatch</h1>
      <Stopwatch seconds={10} />
    </div>
    <div className="Timer">
      <h1>Timer</h1>
      <Timer />
    </div>
  </div>
  , document.getElementById('app')
)
