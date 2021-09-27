import React from 'react';

import {Text, StyleSheet, View} from 'react-native';

import BackgroundForm from '../components/BackgroundForm';
import CredentialTextInput from '../components/CredentialTextInput';
import FilledButton from '../components/FilledButton';
import SocialNetworkButtonsForm from '../components/SocialNetworkButtonsForm';
import TextButton from '../components/TextButton';

interface LoginScreenState {
  email: string;
  password: string;
}

class LoginScreen extends React.Component<{}, LoginScreenState> {
  state = {
    email: '',
    password: '',
  };

  render() {
    return (
      <BackgroundForm viewStyle={styles.viewStyle}>
        <View style={styles.inputContainer}>
          <CredentialTextInput
            value={this.state.email}
            onChangeText={email => this.setState({email})}
            inputStyle={styles.inputStyle}
            placeholder="Email"
          />
          <CredentialTextInput
            value={this.state.password}
            onChangeText={password => this.setState({password})}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <TextButton
          title="Forget password?"
          align="flex-start"
          color="rgb(64, 80, 164)"
          textButtonStyle={styles.textButtonStyle}
        />
        <FilledButton
          onPress={() =>
            console.log('"Sign in" button was pressed', this.state)
          }
          title="Sign In"
        />
        <Text style={styles.orSignWithStyle}>or sign with</Text>
        <SocialNetworkButtonsForm />
        <TextButton
          title="Don’t have an account?"
          align="center"
          color="rgb(181, 182, 221)"
          textButtonStyle={{marginTop: 30}}
        />
      </BackgroundForm>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    paddingTop: 30,
    paddingBottom: 50,
    paddingHorizontal: 20,
    width: '100%',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  inputContainer: {
    marginBottom: 30,
  },
  inputStyle: {
    marginBottom: 15,
  },
  textButtonStyle: {
    marginBottom: 40,
  },
  orSignWithStyle: {
    marginTop: 18,
    marginBottom: 18,
    textAlign: 'center',
    fontSize: 13,
    color: 'rgb(181, 182, 221)',
  },
  buttonsContainerStyle: {
    marginBottom: 30,
  },
});

export default LoginScreen;
