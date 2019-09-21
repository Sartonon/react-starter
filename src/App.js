import React from 'react'
import { hot } from 'react-hot-loader/root'

const Warning = React.lazy(() => import('./Warning'))

const a = '2222'

class App extends React.Component {
  state = {
    count: 0
  }

  render() {
    console.log('Moi')
    return (
      <div>
        <h1>Hello world!!</h1>
        {this.state.count > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : (
          ''
        )}
        <h2>Count: {this.state.count}</h2>

        <button
          onClick={() => this.setState(state => ({ count: state.count + 1 }))}
        >
          +
        </button>
        <button
          onClick={() => this.setState(state => ({ count: state.count - 1 }))}
        >
          -
        </button>
      </div>
    )
  }
}

export default hot(App)
