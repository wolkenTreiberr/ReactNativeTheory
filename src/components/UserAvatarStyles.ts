import {StyleSheet} from 'react-native';

const UserAvatarStyles = StyleSheet.create({
  imageBackground: {
    width: 90,
    height: 90,
    right: -5,
    top: -5,
  },
  icon: {
    position: 'absolute',
    opacity: 1,
    overflow: 'hidden',
    right: 4,
    bottom: 3,
  },
});

export default UserAvatarStyles;
