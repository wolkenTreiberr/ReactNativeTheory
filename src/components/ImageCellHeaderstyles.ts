import {StyleSheet} from 'react-native';

const ImageCellHeaderstyles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    borderRadius: 10,
    height: 32,
    width: 32,
  },
  nameText: {
    fontSize: 14,
  },
});

export default ImageCellHeaderstyles;
