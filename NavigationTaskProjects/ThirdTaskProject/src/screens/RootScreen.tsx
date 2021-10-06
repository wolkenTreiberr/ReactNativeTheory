import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Root'>;

const RootScreen = ({navigation, route}: NavigationProps) => {
  const [text, setText] = useState(route.params.textAreaInput);
  useEffect(
    () => setText(route.params.textAreaInput),
    [route.params.textAreaInput],
  );

  return (
    <View style={styles.container}>
      <View style={styles.textInput}>
        <TextInput onChangeText={setText} value={text} />
      </View>
      <View style={styles.red}>
        <Button
          title="Push RED"
          onPress={() => navigation.navigate('Red', {textAreaInput: text})}
          color={'white'}
        />
      </View>
      <View style={styles.green}>
        <Button
          title="Push GREEN"
          onPress={() => navigation.navigate('Green', {textAreaInput: text})}
          color={'white'}
        />
      </View>
      <View style={styles.blue}>
        <Button
          title="Push BLUE"
          onPress={() => navigation.navigate('Blue', {textAreaInput: text})}
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
    backgroundColor: 'rgb(220,170,80)',
  },
  textInput: {
    width: '60%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  red: {
    backgroundColor: 'rgb(205,20,0)',
    borderRadius: 8,
    width: '40%',
  },
  green: {
    backgroundColor: 'rgb(0,155,0)',
    borderRadius: 8,
    width: '40%',
  },
  blue: {
    backgroundColor: 'rgb(0,150,255)',
    borderRadius: 8,
    width: '40%',
  },
});
export default RootScreen;
