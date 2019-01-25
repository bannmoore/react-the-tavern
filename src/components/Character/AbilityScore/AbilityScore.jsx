const React = require('react')
const PropTypes = require('prop-types')

class AbilityScore extends React.Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
  }

  calculateModifier(score) {
    return Math.floor((score - 10) / 2)
  }

  onChange(event) {
    this.props.onChange(this.props.label, event.target.name, event.target.value)
  }

  render() {
    const { label, abilityScore } = this.props
    return (
      <div className="row">
        <div className="label">{label}</div>
        <div>
          <input
            className="ability"
            type="number"
            name="base"
            value={abilityScore.base}
            onChange={this.onChange}
          />
        </div>
        <div>
          <input
            className="ability"
            type="number"
            name="baseMod"
            value={this.calculateModifier(abilityScore.base)}
            readOnly
          />
        </div>
        <div>
          <input
            className="ability"
            type="number"
            name="temp"
            value={abilityScore.temp}
            onChange={this.onChange}
          />
        </div>
        <div>
          <input
            className="ability"
            type="number"
            name="tempMod"
            value={this.calculateModifier(abilityScore.temp)}
            readOnly
          />
        </div>
      </div>
    )
  }
}

AbilityScore.propTypes = {
  abilityScore: PropTypes.object,
  label: PropTypes.string,
  onChange: PropTypes.func
}

AbilityScore.defaultProps = {
  abilityScore: {}
}

module.exports = AbilityScore
