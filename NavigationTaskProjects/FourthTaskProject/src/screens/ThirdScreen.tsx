import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'FirstUIViewController'
>;

const ThirdScreen = ({navigation, route}: NavigationProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {route.name}</Text>
      <View style={styles.button}>
        <Button
          title="Close"
          onPress={() => navigation.navigate('FirstUIViewController')}
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
    backgroundColor: 'rgb(141,110,201)',
  },
  button: {
    backgroundColor: 'rgb(30,30,30)',
    borderRadius: 8,
    marginBottom: '15%',
    width: '40%',
  },
  text: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    marginTop: '25%',
  },
});

export default ThirdScreen;
