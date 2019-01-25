const React = require('react')
const { shallow } = require('enzyme')
const CharacterSheet = require('./Sheet')
const CharacterSheetView = require('./View/View')

function flushPromises() {
  return new Promise(resolve => setTimeout(resolve, 0))
}

describe('CharacterSheet', () => {
  it('shallow renders without crashing', async () => {
    const api = td.object(['getCharacter'])
    td.when(api.getCharacter('the-character')).thenResolve({
      id: 'the-character'
    })

    shallow(<CharacterSheet id="the-character" characterApi={api} />)
    await flushPromises()
  })

  it('should load character data', async () => {
    const api = td.object(['getCharacter'])
    const character = { id: 'the-characer' }
    td.when(api.getCharacter('the-character')).thenResolve(character)

    const subject = shallow(
      <CharacterSheet id="the-character" characterApi={api} />
    )
    const view = () => subject.find(CharacterSheetView)
    await flushPromises()

    expect(view().props().character).toEqual(character)
  })

  it('should wire up submit handler', async () => {
    const api = td.object(['getCharacter', 'updateCharacter'])
    const character = { id: 'the-characer' }
    td.when(api.getCharacter('the-character')).thenResolve(character)

    const subject = shallow(
      <CharacterSheet id="the-character" characterApi={api} />
    )
    const view = () => subject.find(CharacterSheetView)
    await flushPromises()

    td.when(api.updateCharacter(character)).thenResolve({
      ...character,
      updated: true
    })

    view().simulate('submit', {
      preventDefault: td.func()
    })

    await flushPromises()

    expect(view().props().character).toEqual({
      ...character,
      updated: true
    })
  })
})
