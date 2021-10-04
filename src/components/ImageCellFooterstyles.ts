import {StyleSheet} from 'react-native';

const ImageCellFooterstyles = StyleSheet.create({
  footerContainer: {
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
  },
  likeButtonTouchableOpacity: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  likeButton: {
    width: 40,
    height: 40,
  },
  likesCounter: {
    color: 'black',
    fontSize: 18,
  },
  unlikeButton: {
    width: 40,
    height: 40,
    opacity: 0.4,
  },
});

export default ImageCellFooterstyles;
