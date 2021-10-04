import {StyleSheet} from 'react-native';

const ImagesScreenstyle = StyleSheet.create({
  additionalView: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    alignItems: 'center',
    borderTopRightRadius: 20,
    paddingHorizontal: 0,
    paddingTop: 30,
    paddingBottom: 50,
    marginTop: 20,
  },
  flatList: {
    flex: 1,
    width: '100%',
  },
  imageContainer: {
    width: '100%',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ImagesScreenstyle;
