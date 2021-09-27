import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import FilledButtonstyles from './FilledButtonstyles';

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
        style={{...FilledButtonstyles.button, ...this.props.filledButtonStyle}}>
        <Text style={FilledButtonstyles.text}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default FilledButton;
