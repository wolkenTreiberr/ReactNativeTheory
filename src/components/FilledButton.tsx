import React from 'react';

import {Text, StyleSheet, TouchableOpacity} from 'react-native';

interface FilledButtonProps {
  title: string;
  filledButtonStyle?: object;
  disabled?: boolean;
  onPress(): void;
}

class FilledButton extends React.Component<FilledButtonProps, {}> {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        disabled={this.props.disabled}
        activeOpacity={0.8}
        style={{...styles.button, ...this.props.filledButtonStyle}}>
        <Text style={styles.text}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(64, 80, 164)',
    borderRadius: 25,
  },
  text: {
    fontSize: 15,
    color: 'white',
  },
});

export default FilledButton;
