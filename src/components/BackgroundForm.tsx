import React from 'react';
import {
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import BackgroundFormStyles from './BackgroundFormStyles';

const BackgroundImageUri: object = {
  uri: 'https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
};

interface BackgroundFormProps {
  containerStyle: object;
  prepend?: JSX.Element[];
  append?: JSX.Element;
}

export default class BackgroundForm extends React.Component<BackgroundFormProps> {
  render() {
    return (
      <ImageBackground
        source={BackgroundImageUri}
        style={BackgroundFormStyles.backgroundImage}>
        <View>{this.props.prepend}</View>
        <KeyboardAvoidingView
          style={BackgroundFormStyles.backgroundImage}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View
            style={{
              ...BackgroundFormStyles.viewContainer,
              ...this.props.containerStyle,
            }}>
            {this.props.children}
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}
