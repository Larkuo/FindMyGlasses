import React from 'react';
import { useColorScheme } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from '../navigation/AppNavigator';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
