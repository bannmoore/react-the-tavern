const React = require('react')
const { shallow } = require('enzyme')
const CharacterList = require('./List')

describe('CharacterList', () => {
  it('shallow renders without crashing', () => {
    shallow(<CharacterList />)
  })
})
