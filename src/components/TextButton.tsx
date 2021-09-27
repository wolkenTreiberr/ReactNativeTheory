import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
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
          ...styles.touchableOpacityStyle,
          ...this.props.textButtonStyle,
          alignItems: this.props.align,
        }}
        activeOpacity={0.8}
        onPress={this.props.onPress}>
        <Text style={{...styles.textStyle, color: this.props.color}}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  touchableOpacityStyle: {},
  textStyle: {
    fontSize: 13,
  },
});

export default TextButton;
