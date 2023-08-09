import React from 'react';
import StackNavigator from './src/navigation/StackNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
    <GestureHandlerRootView style={{flex: 1}}>
      <StackNavigator />
    </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
