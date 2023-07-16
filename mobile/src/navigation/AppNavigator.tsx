import React from 'react';
import {AppParamList, APP_SCREENS} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator<AppParamList>();

export const AppNavigator = () => {
    const INITIAL_ROUTE = 'titleScreen';


  return (
    <AppStack.Navigator
      initialRouteName={INITIAL_ROUTE}
      screenOptions={{
        gestureEnabled: true,
      }}>
      {Object.entries(APP_SCREENS).map(([screenName, data]) => (
        <AppStack.Screen
          key={screenName}
          name={screenName}
          component={data.component}
          options={data.options}
        />
      ))}
    </AppStack.Navigator>
  );
};