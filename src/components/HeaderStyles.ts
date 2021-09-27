import {StyleSheet} from 'react-native';

const HeaderStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 33,
    width: '100%',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 0.5,
    top: 10,
    paddingLeft: '25%',
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
  editButton: {
    top: 10,
    left: 60,
    flex: 0.1,
  },
});

export default HeaderStyles;
