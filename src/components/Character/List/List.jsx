const React = require('react')
const PropTypes = require('prop-types')
const { Link } = require('react-router-dom')
const CharacterApi = require('../../../lib/character-api')

class CharacterList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    return this.props.characterApi.getCharacters().then(characters =>
      this.setState({
        characters
      })
    )
  }

  renderCharacters(characters) {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Level</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {characters.map(character => (
            <tr key={character.id}>
              <td>{character.name}</td>
              <td>{character.level}</td>
              <td>
                <Link to={`/characters/${character.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  render() {
    const { characters } = this.state

    return (
      <div>
        <h1>My Characters</h1>
        {this.renderCharacters(characters)}
      </div>
    )
  }
}

CharacterList.propTypes = {
  characterApi: PropTypes.any
}

CharacterList.defaultProps = {
  characterApi: new CharacterApi()
}

module.exports = CharacterList
