// In App.js in a new project

import * as React from 'react';
import {  LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreen from './SigninScreen';
import signupScreen from './signupScreen';

LogBox.ignoreAllLogs(true);

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='signin' screenOptions={{headerShown: false}}>
        <Stack.Screen name="signin" component={SigninScreen} />
        <Stack.Screen name="signup" component={signupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;