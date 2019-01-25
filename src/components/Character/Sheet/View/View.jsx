const React = require('react')
const PropTypes = require('prop-types')
const AbilityScores = require('../../AbilityScores/AbilityScores')

const CharacterSheetView = ({ character, onSubmit, onAbilityChange }) => (
  <div>
    <h1>{character.name}</h1>
    <form onSubmit={onSubmit}>
      <AbilityScores
        abilityScores={character.abilityScores}
        onChange={onAbilityChange}
      />

      <div className="buttons">
        <button type="submit">Save</button>
      </div>
    </form>
  </div>
)

CharacterSheetView.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    abilityScores: PropTypes.object
  }),
  onSubmit: PropTypes.func,
  onAbilityChange: PropTypes.func
}

CharacterSheetView.defaultProps = {
  character: {}
}

module.exports = CharacterSheetView
