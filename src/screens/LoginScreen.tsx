import React from 'react';
import {Text, View} from 'react-native';
import LoginScreenstyles from './LoginScreenstyles';
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
    <BackgroundForm containerStyle={LoginScreenstyles.viewContainer}>
      <View style={LoginScreenstyles.inputContainer}>
        <CredentialTextInput
          value={email}
          onChangeText={newEmail => setEmail(newEmail)}
          inputStyle={LoginScreenstyles.input}
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
        textButtonStyle={LoginScreenstyles.textButton}
      />
      <FilledButton
        onPress={() =>
          console.log('"Sign in" button was pressed', email, password)
        }
        title="Sign In"
      />
      <Text style={LoginScreenstyles.orSignWith}>or sign with</Text>
      <SocialNetworkForm />
      <TextButton
        title="Don’t have an account?"
        align="center"
        color="rgb(181, 182, 221)"
        textButtonStyle={LoginScreenstyles.dontHaveAnAccount}
      />
    </BackgroundForm>
  );
};

export default LoginScreen;
