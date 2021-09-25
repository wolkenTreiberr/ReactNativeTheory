import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import TextButtonStyles from './TextButtonStyles';

interface TextButtonProps {
  title: string;
  color: string;
  align?: 'flex-start' | 'center' | 'flex-end';
  onPress?(): void | boolean;
  textButtonStyle?: object;
}

class TextButton extends React.Component<TextButtonProps, {}> {
  render() {
    return (
      <TouchableOpacity
        style={{
          ...this.props.textButtonStyle,
          alignItems: this.props.align,
        }}
        activeOpacity={0.8}
        onPress={this.props.onPress}>
        <Text style={{...TextButtonStyles.textStyle, color: this.props.color}}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default TextButton;
