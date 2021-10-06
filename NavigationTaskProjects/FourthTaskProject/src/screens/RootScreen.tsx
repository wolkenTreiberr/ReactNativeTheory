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
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title="Push VC2"
          onPress={() => navigation.navigate('SecondUIViewController')}
          color={'white'}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Modal VC3"
          onPress={() => navigation.navigate('ThirdUIViewController')}
          color={'white'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'rgb(62,200,137)',
  },
  button: {
    backgroundColor: 'rgb(141,110,201)',
    borderRadius: 8,
    width: '40%',
  },
});
export default RootScreen;
