import {StyleSheet} from 'react-native';

const ProfileScreenStyle = StyleSheet.create({
  viewContainer: {
    flex: 0.9,
    paddingTop: 60,
    paddingBottom: 20,
  },
  filledButton: {
    marginTop: 'auto',
  },
  avatar: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'center',
    top: -35,
    left: 20,
  },
  input: {
    marginBottom: 5,
  },
});

export default ProfileScreenStyle;
