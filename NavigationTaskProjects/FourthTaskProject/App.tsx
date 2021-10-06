import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import FifthScreen from './src/screens/FifthScreen';
import FourthScreen from './src/screens/FourthScreen';
import RootScreen from './src/screens/RootScreen';
import SecondScreen from './src/screens/SecondScreen';
import ThirdScreen from './src/screens/ThirdScreen';

export type RootStackParamList = {
  FirstUIViewController: undefined;
  SecondUIViewController: undefined;
  ThirdUIViewController: undefined;
  FourthUIViewController: undefined;
  FifthUIViewController: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

const RootView = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="FirstUIViewController" component={RootScreen} />
        <Stack.Screen name="SecondUIViewController" component={SecondScreen} />
      </Stack.Group>
      <Stack.Screen
        name="ThirdUIViewController"
        component={ThirdScreen}
        options={{headerShown: false, presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
};

const ExtendedView = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="FourthUIViewController"
          component={FourthScreen}
          options={{headerLeft: () => null}}
        />
        <Stack.Screen
          name="FifthUIViewController"
          component={FifthScreen}
          options={{presentation: 'card'}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="FirstUIViewController"
        screenOptions={{
          tabBarIconStyle: {display: 'none'},
          headerShown: false,
        }}>
        <Tab.Screen name="FirstUIViewController" component={RootView} />
        <Tab.Screen name="FourthUIViewController" component={ExtendedView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
