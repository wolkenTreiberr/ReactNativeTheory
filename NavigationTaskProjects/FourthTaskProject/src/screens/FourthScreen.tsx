import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'FirstUIViewController'
>;

const FourthScreen = ({navigation}: NavigationProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.navButton}>
        <Button
          title="Push VC5"
          onPress={() => navigation.navigate('FifthUIViewController')}
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgb(0,150,250)',
  },
  button: {
    backgroundColor: 'rgb(30,30,30)',
    borderRadius: 8,
    marginBottom: '15%',
    width: '40%',
  },
  navButton: {
    backgroundColor: 'rgb(90,90,90)',
    borderRadius: 8,
    marginBottom: '80%',
    width: '40%',
  },
});

export default FourthScreen;
