const React = require('react')
const { BrowserRouter, Route } = require('react-router-dom')
const ScreensCharacterList = require('./Character/List')
const ScreensCharacterSheet = require('./Character/Sheet')

const ScreensRoot = () => (
  <BrowserRouter>
    <div>
      <Route path="/" exact component={ScreensCharacterList} />
      <Route path="/characters/:id" component={ScreensCharacterSheet} />
    </div>
  </BrowserRouter>
)

module.exports = ScreensRoot
