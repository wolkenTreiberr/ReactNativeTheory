import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'FirstUIViewController'
>;

const SecondScreen = ({navigation}: NavigationProps) => {
  return (
    <View style={styles.VC2Container}>
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
  VC2Container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgb(149, 150, 150)',
  },
});

export default SecondScreen;
