import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Green'>;

const RedScreen = ({navigation, route}: NavigationProps) => {
  const [text, setText] = useState(route.params.textAreaInput);

  return (
    <View style={styles.container}>
      <View style={styles.textInput}>
        <TextInput
          value={text}
          onChangeText={setText}
          onSubmitEditing={() =>
            navigation.navigate({
              name: 'Root',
              params: {textAreaInput: text},
              merge: true,
            })
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgb(0,150,255)',
  },
  textInput: {
    marginTop: '30%',
    width: '60%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
});

export default RedScreen;
