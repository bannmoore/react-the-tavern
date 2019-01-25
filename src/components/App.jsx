const React = require('react')
const { hot } = require('react-hot-loader')
const ScreensRoot = require('../screens/Root')

const App = () => (
  <main>
    <ScreensRoot />
  </main>
)

module.exports = process.env.NODE_ENV === 'production' ? App : hot(module)(App)
