import React, { Component } from 'react'
import AppContainer from './src/AppContainer'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
import { StyleProvider } from 'native-base';
import reducers from './src/reducers';
import commonColors from './native-base-theme/variables/commonColor';
import getTheme from './native-base-theme/components';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <StyleProvider style={getTheme(commonColors)}>
          <AppContainer />
        </StyleProvider>
      </Provider>
    )
  }
}
