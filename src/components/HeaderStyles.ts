import {StyleSheet} from 'react-native';

const Headerstyles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
    width: '100%',
    marginBottom: 33,
  },
  headerTitle: {
    top: 10,
    position: 'absolute',
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
  editButton: {
    top: 15,
    marginLeft: 'auto',
  },
});

export default Headerstyles;
