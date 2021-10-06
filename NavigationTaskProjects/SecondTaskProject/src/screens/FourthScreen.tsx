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
      <View>
        <Button
          title="Push VC5"
          onPress={() => navigation.navigate('FifthUIViewController')}
          color={'rgb(130, 130, 130)'}
        />
      </View>
      <View>
        <Button
          title="Close"
          onPress={() => navigation.navigate('FirstUIViewController')}
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
    backgroundColor: 'rgb(0,150,250)',
  },
  navButton: {
    backgroundColor: 'rgb(90,90,90)',
    borderRadius: 8,
    marginBottom: '80%',
    width: '40%',
  },
});

export default FourthScreen;
