import React, {useState} from 'react';
import {Text, View} from 'react-native';
import LoginScreenStyles from './LoginScreenStyles';
import BackgroundForm from '../components/BackgroundForm';
import CredentialTextInput from '../components/CredentialTextInput';
import FilledButton from '../components/FilledButton';
import SocialNetworkForm from '../components/SocialNetworkForm';
import TextButton from '../components/TextButton';
// import useDeviceOrientation from '../hooks/useDeviceOrientation';

interface LoginScreenState {
  email: string;
  password: string;
}

const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // const orientation = useDeviceOrientation;

  return (
    <BackgroundForm containerStyle={LoginScreenStyles.viewContainer}>
      <View style={LoginScreenStyles.inputContainer}>
        <CredentialTextInput
          value={email}
          onChangeText={newEmail => setEmail(newEmail)}
          inputStyle={LoginScreenStyles.input}
          placeholder="Email"
        />
        <CredentialTextInput
          value={password}
          onChangeText={newPassword => setPassword(newPassword)}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <TextButton
        title="Forget password?"
        align="flex-start"
        color="rgb(64, 80, 164)"
        textButtonStyle={LoginScreenStyles.textButton}
      />
      <FilledButton
        onPress={() =>
          console.log('"Sign in" button was pressed', email, password)
        }
        title="Sign In"
      />
      <Text style={LoginScreenStyles.orSignWith}>or sign with</Text>
      <SocialNetworkForm />
      <TextButton
        title="Don’t have an account?"
        align="center"
        color="rgb(181, 182, 221)"
        textButtonStyle={LoginScreenStyles.dontHaveAnAccount}
      />
    </BackgroundForm>
  );
};

export default LoginScreen;
