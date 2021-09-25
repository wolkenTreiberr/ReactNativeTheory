import {StyleSheet} from 'react-native';

const SubscriberCellStyles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 67,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  userImage: {
    width: 47,
    height: 47,
    borderRadius: 8,
    marginRight: 10,
  },
  userTitle: {
    color: 'rgb(77, 81, 128)',
    fontSize: 17,
    fontWeight: '700',
  },
  userDescription: {
    color: 'rgb(181, 182, 221)',
    fontSize: 12,
  },
  followButton: {
    height: 29,
    width: 92,
    fontSize: 12,
    backgroundColor: 'rgb(64, 80, 164)',
    color: 'white',
    marginLeft: 'auto',
  },
  followingButton: {
    height: 29,
    width: 92,
    fontSize: 12,
    backgroundColor: 'rgb(190, 198, 255)',
    color: 'rgb(77, 91, 177)',
    marginLeft: 'auto',
  },
});

export default SubscriberCellStyles;
