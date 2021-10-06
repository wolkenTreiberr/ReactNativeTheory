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

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstUIViewController">
        <Stack.Group>
          <Stack.Screen name="FirstUIViewController" component={RootScreen} />
          <Stack.Screen
            name="SecondUIViewController"
            component={SecondScreen}
          />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            presentation: 'modal',
          }}>
          <Stack.Screen
            name="ThirdUIViewController"
            component={ThirdScreen}
            options={{headerShown: false}}
          />
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
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
