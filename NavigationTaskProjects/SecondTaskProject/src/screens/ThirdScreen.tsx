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
    <View style={styles.VC3Container}>
      <Text style={styles.text}> {route.name}</Text>
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
  VC3Container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgb(143, 53, 161)',
  },
  text: {
    flex: 1,
    marginTop: '25%',
    fontWeight: '600',
    fontSize: 18,
  },
});

export default ThirdScreen;
