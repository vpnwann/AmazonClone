// HiddenStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Test from './Test';
import HomeScreen from './HomeScreen';
import Settings from './Settings';
import ProductDetail from './ProductDetail';

const Stack = createStackNavigator();

function HiddenStack() {
  return (
    <Stack.Navigator  screenOptions={{
      headerShown: false, // Hides the header for all screens
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}

export default HiddenStack;
