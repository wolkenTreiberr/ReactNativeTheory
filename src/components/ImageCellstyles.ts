import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const imageHeight = 300;

const ImageCellstyles = StyleSheet.create({
  image: {
    height: imageHeight,
    width: screenWidth,
  },
});

export default ImageCellstyles;
