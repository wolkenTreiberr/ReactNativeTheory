import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import TextButtonstyles from './TextButtonstyles';

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
        <Text style={{...TextButtonstyles.textStyle, color: this.props.color}}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default TextButton;
