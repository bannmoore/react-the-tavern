const React = require('react')
const { shallow } = require('enzyme')
const CharacterAbilityScore = require('./AbilityScore')

describe('CharacterAbilityScore', () => {
  it('shallow renders without crashing', () => {
    shallow(<CharacterAbilityScore />)
  })
})
