/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Routers from './src/screens/Routers';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Routers />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
