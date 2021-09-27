import React from 'react';
import {Text, View} from 'react-native';
import LoginScreenstyles from './LoginScreenstyles';
import BackgroundForm from '../components/BackgroundForm';
import CredentialTextInput from '../components/CredentialTextInput';
import FilledButton from '../components/FilledButton';
import SocialNetworkForm from '../components/SocialNetworkForm';
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
      <BackgroundForm containerStyle={LoginScreenstyles.viewContainer}>
        <View style={LoginScreenstyles.inputContainer}>
          <CredentialTextInput
            value={this.state.email}
            onChangeText={email => this.setState({email})}
            inputStyle={LoginScreenstyles.input}
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
          textButtonStyle={LoginScreenstyles.textButton}
        />
        <FilledButton
          onPress={() =>
            console.log('"Sign in" button was pressed', this.state)
          }
          title="Sign In"
        />
        <Text style={LoginScreenstyles.orSignWith}>or sign with</Text>
        <SocialNetworkForm />
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

export default LoginScreen;
