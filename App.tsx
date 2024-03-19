/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

import Main from './src/Main.tsx';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}

export default App;
