const React = require('react')
const { shallow } = require('enzyme')
const App = require('./App')

describe('App', () => {
  it('shallow renders without crashing', () => {
    shallow(<App />)
  })
})
