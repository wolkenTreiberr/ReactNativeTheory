import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import BlueScreen from './src/screens/BlueScreen';
import RootScreen from './src/screens/RootScreen';
import RedScreen from './src/screens/RedScreen';
import GreenScreen from './src/screens/GreenScreen';

export type RootStackParamList = {
  Root: {textAreaInput: string};
  Red: {textAreaInput: string};
  Green: {textAreaInput: string};
  Blue: {textAreaInput: string};
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Root">
        <Stack.Screen
          name="Root"
          component={RootScreen}
          options={{title: 'Text input'}}
          initialParams={{textAreaInput: ''}}
        />
        <Stack.Screen name="Red" component={RedScreen} />
        <Stack.Screen name="Green" component={GreenScreen} />
        <Stack.Screen name="Blue" component={BlueScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
