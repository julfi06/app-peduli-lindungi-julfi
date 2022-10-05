import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SplashScreen
} from './Pages';

const Stack = createStackNavigator();

export default Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};