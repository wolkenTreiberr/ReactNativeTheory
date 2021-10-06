import React from 'react';
import {Button, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import style from './style';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Root'>;

const SecondScreen = ({navigation}: NavigationProps) => {
  return (
    <View style={style.container}>
      <View>
        <Button
          title="Push second"
          onPress={() => navigation.navigate('Third')}
          color={'blue'}
        />
      </View>
    </View>
  );
};

export default SecondScreen;
