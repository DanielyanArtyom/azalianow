import React from 'react';
import {Navigation} from './src/navigation/Navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux-store/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => (
  <GestureHandlerRootView style={{flex: 1}}>
    <Provider store={store}>
      <Navigation />
    </Provider>
  </GestureHandlerRootView>
);

export default App;
