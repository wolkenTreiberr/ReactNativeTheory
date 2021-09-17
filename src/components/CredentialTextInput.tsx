import React from 'react';

import {TextInput, StyleSheet, View} from 'react-native';

interface CredentialTextInputProps {
  placeholder: string;
  value?: string;
  secureTextEntry?: boolean;
  onChangeText?(text: string): void;
  inputStyle?: object;
  editable?: boolean;
  onFocus?(): void;
}

class CredentialTextInput extends React.Component<
  CredentialTextInputProps,
  {}
> {
  render() {
    return (
      <>
        <View>
          <TextInput
            value={this.props.value}
            onChangeText={this.props.onChangeText}
            editable={this.props.editable}
            onFocus={this.props.onFocus}
            placeholder={this.props.placeholder}
            secureTextEntry={this.props.secureTextEntry}
            style={{...styles.textInputStyle, ...this.props.inputStyle}}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  textWrapper: {
    flexDirection: 'row',
  },
  textInputStyle: {
    width: '100%',
    fontSize: 15,
    borderBottomWidth: 1,
    paddingVertical: 8,
    borderColor: 'rgb(181,182,221)',
  },
});

export default CredentialTextInput;
