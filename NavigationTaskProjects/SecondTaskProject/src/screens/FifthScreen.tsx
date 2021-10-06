import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'FirstUIViewController'
>;

const FifthScreen = ({navigation}: NavigationProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title="Close"
          onPress={() => navigation.navigate('FourthUIViewController')}
          color={'rgb(48, 48, 48)'}
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
    backgroundColor: 'rgb(50,50,50)',
  },
  button: {
    backgroundColor: 'rgb(30,30,30)',
    borderRadius: 8,
    marginBottom: '15%',
    width: '40%',
  },
});

export default FifthScreen;
