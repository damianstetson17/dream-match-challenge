import React from 'react';
import StackNavigator from './src/navigation/StackNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StackNavigator />
    </GestureHandlerRootView>
  );
};

export default App;
