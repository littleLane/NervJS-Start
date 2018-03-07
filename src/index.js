/**
 * @author lane
 * @date 2018-3-7
 * @desc A development environment base on NervJS and Athena tool!
 */

import Nerv from 'nervjs'

class App extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  render () {
    return (
      <div className='app'>
      </div>
    )
  }
}

Nerv.render(<App />, document.getElementById('J_container'))
