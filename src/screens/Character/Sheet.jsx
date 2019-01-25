const React = require('react')
const PropTypes = require('prop-types')
const CharacterSheet = require('../../components/Character/Sheet/Sheet')

const ScreensCharacterSheet = ({ match }) => (
  <CharacterSheet id={match.params.id} />
)

ScreensCharacterSheet.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
}

module.exports = ScreensCharacterSheet
