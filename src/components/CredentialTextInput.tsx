import React from 'react';
import {TextInput, Text, View} from 'react-native';
import CredentialTextInputstyles from './CredentialTextInputstyles';

interface CredentialTextInputProps {
  placeholder: string;
  value?: string;
  secureTextEntry?: boolean;
  onChangeText?(text: string): void;
  inputStyle?: object;
  editable?: boolean;
  errorMessage?: string | null;
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
            ...CredentialTextInputstyles.textInput,
            ...this.props.inputStyle,
          }}
        />
        <View style={CredentialTextInputstyles.errorsWrapper}>
          <Text style={CredentialTextInputstyles.errorMessage}>
            {this.props.errorMessage}
          </Text>
        </View>
      </View>
    );
  }
}

export default CredentialTextInput;
