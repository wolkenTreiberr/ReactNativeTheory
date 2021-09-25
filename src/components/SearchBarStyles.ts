import {StyleSheet} from 'react-native';

const SearchBarStyles = StyleSheet.create({
  viewContainer: {
    width: 'auto',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 20,
    backgroundColor: 'white',
    overflow: 'hidden',
    alignItems: 'center',
    margin: 20,
    top: 12,
  },
  textInput: {
    height: 40,
    flex: 1,
    borderRightColor: 'grey',
    backgroundColor: 'white',
  },
  containerIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
});

export default SearchBarStyles;
