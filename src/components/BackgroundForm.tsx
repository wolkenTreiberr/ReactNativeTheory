import React from 'react';
import {
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import BackgroundFormstyles from './BackgroundFormstyles';

const BackgroundImageUri: object = {
  uri: 'https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
};

interface BackgroundFormProps {
  containerStyle: object;
  prependedChildren?: JSX.Element[];
  appendedChildren?: JSX.Element;
}

export default class BackgroundForm extends React.Component<BackgroundFormProps> {
  render() {
    return (
      <ImageBackground
        source={BackgroundImageUri}
        style={BackgroundFormstyles.backgroundImage}>
        <View>{this.props.prependedChildren}</View>
        <KeyboardAvoidingView
          style={BackgroundFormstyles.backgroundImage}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View
            style={{
              ...BackgroundFormstyles.viewContainer,
              ...this.props.containerStyle,
            }}>
            {this.props.children}
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}
