import React from 'react';
import {Button, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './App';
import style from './style';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Root'>;

const ThirdScreen = ({navigation}: NavigationProps) => {
  return (
    <View style={style.thirdContainer}>
      <View>
        <Button
          title="Go To Root"
          onPress={() => navigation.navigate('Root')}
          color={'white'}
        />
      </View>
    </View>
  );
};

export default ThirdScreen;
