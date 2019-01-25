const React = require('react')
const PropTypes = require('prop-types')
const AbilityScore = require('../AbilityScore/AbilityScore')

const AbilityScores = ({ abilityScores, onChange }) => (
  <div className="grid">
    <div className="row row--header">
      <div>Ability Name</div>
      <div>Ability Score</div>
      <div>Ability Modifier</div>
      <div>Temp Adjustment</div>
      <div>Temp Modifier</div>
    </div>
    <AbilityScore
      label="STR"
      abilityScore={abilityScores['STR']}
      onChange={onChange}
    />
    <AbilityScore
      label="DEX"
      abilityScore={abilityScores['DEX']}
      onChange={onChange}
    />
    <AbilityScore
      label="CON"
      abilityScore={abilityScores['CON']}
      onChange={onChange}
    />
    <AbilityScore
      label="INT"
      abilityScore={abilityScores['INT']}
      onChange={onChange}
    />
    <AbilityScore
      label="WIS"
      abilityScore={abilityScores['WIS']}
      onChange={onChange}
    />
    <AbilityScore
      label="CHA"
      abilityScore={abilityScores['CHA']}
      onChange={onChange}
    />
  </div>
)

AbilityScores.propTypes = {
  abilityScores: PropTypes.object,
  onChange: PropTypes.func
}

AbilityScores.defaultProps = {
  abilityScores: {}
}

module.exports = AbilityScores
