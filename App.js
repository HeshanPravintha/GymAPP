import React, { Component } from 'react'
import AppContainer from './src/AppContainer'
import { StyleProvider } from 'native-base';
import commonColors from './native-base-theme/variables/commonColor';
import getTheme from './native-base-theme/components';

export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(commonColors)}>
  <AppContainer />
      </StyleProvider>
   
    )
  }
}
