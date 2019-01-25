const React = require('react')
const { shallow } = require('enzyme')
const CharacterAbilityScores = require('./AbilityScores')

describe('CharacterAbilityScores', () => {
  it('shallow renders without crashing', () => {
    shallow(<CharacterAbilityScores />)
  })
})
