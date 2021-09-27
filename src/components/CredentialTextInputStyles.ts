import {StyleSheet} from 'react-native';

const CredentialTextInputStyles = StyleSheet.create({
  textInput: {
    width: '100%',
    fontSize: 15,
    borderBottomWidth: 1,
    paddingVertical: 8,
    borderColor: 'rgb(181,182,221)',
  },
  errorsWrapper: {
    marginVertical: 10,
  },
  errorMessage: {
    alignSelf: 'flex-start',
    fontSize: 12,
    color: '#ff0000',
  },
});

export default CredentialTextInputStyles;
