import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import FilledButtonStyles from './FilledButtonStyles';

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
        style={{...FilledButtonStyles.button, ...this.props.filledButtonStyle}}>
        <Text style={FilledButtonStyles.text}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default FilledButton;
