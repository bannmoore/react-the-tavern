const React = require('react')
const { shallow } = require('enzyme')
const CharacterSheetView = require('./View')

describe('CharacterSheetView', () => {
  it('shallow renders without crashing', () => {
    shallow(<CharacterSheetView />)
  })
})
