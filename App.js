import React, { Component } from 'react'
import AppContainer from './src/AppContainer'

export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme()}>
  <AppContainer />
      </StyleProvider>
   
    )
  }
}
