import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'FirstUIViewController'
>;

const RootScreen = ({navigation}: NavigationProps) => {
  return (
    <View style={styles.rootContainer}>
      <View>
        <Button
          title="Push VC2"
          onPress={() => navigation.navigate('SecondUIViewController')}
          color={'rgb(146, 63, 171)'}
        />
      </View>
      <View>
        <Button
          title="Modal VC3"
          onPress={() => navigation.navigate('ThirdUIViewController')}
          color={'rgb(146, 63, 171)'}
        />
      </View>
      <View>
        <Button
          title="Modal VC4"
          onPress={() => navigation.navigate('FourthUIViewController')}
          color={'rgb(146, 63, 171)'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'rgb(71, 222, 169)',
  },
});
export default RootScreen;
