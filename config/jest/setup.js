const { configure } = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
const td = require('testdouble')
const expect = require('expect')

configure({ adapter: new Adapter() })

global.td = td
global.expect = expect

require('testdouble-jest')(td, jest)

afterEach(function() {
  td.reset()
})
