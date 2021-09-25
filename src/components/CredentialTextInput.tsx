import React from 'react';
import {TextInput, View} from 'react-native';
import CredentialTextInputStyles from './CredentialTextInputStyles';

interface CredentialTextInputProps {
  placeholder: string;
  value?: string;
  secureTextEntry?: boolean;
  onChangeText?(text: string): void;
  inputStyle?: object;
  editable?: boolean;
}

class CredentialTextInput extends React.Component<CredentialTextInputProps> {
  render() {
    return (
      <View>
        <TextInput
          value={this.props.value}
          onChangeText={this.props.onChangeText}
          editable={this.props.editable}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
          style={{
            ...CredentialTextInputStyles.textInput,
            ...this.props.inputStyle,
          }}
        />
      </View>
    );
  }
}

export default CredentialTextInput;
