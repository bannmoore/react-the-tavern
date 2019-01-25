const React = require('react')
const PropTypes = require('prop-types')
const CharacterApi = require('../../../lib/character-api')
const CharacterSheetView = require('./View/View')

class CharacterSheet extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      character: undefined
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleAbilityChange = this.handleAbilityChange.bind(this)
  }

  componentDidMount() {
    return this.props.characterApi.getCharacter(this.props.id).then(character =>
      this.setState({
        character
      })
    )
  }

  handleSubmit(event) {
    event.preventDefault()

    return this.props.characterApi
      .updateCharacter(this.state.character)
      .then(character =>
        this.setState({
          character
        })
      )
  }

  handleAbilityChange(name, type, score) {
    let character = Object.assign({}, this.state.character)
    character.abilityScores[name][type] = score
    return this.setState({ character })
  }

  render() {
    const { character } = this.state
    return (
      <CharacterSheetView
        character={character}
        onSubmit={this.handleSubmit}
        onAbilityChange={this.handleAbilityChange}
      />
    )
  }
}

CharacterSheet.propTypes = {
  characterApi: PropTypes.any,
  id: PropTypes.string
}

CharacterSheet.defaultProps = {
  characterApi: new CharacterApi()
}

module.exports = CharacterSheet
