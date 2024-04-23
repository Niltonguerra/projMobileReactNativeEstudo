// App.tsx
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import CreateAccountScreen from './screens/user/CreateAccountScreen';
import EditAccountScreen from './screens/user/EditAccountScreen';
import DetailAccountScreen from './screens/user/DetailAccount';
import ProductScreen from './screens/ProductScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="EditAccount" component={EditAccountScreen} />
        <Stack.Screen name="DetailAccount" component={DetailAccountScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
