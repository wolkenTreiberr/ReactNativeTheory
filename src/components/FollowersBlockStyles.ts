import {StyleSheet} from 'react-native';

const FollowersBlockStyles = StyleSheet.create({
  userInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 30,
    width: '100%',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'rgb(192, 192, 192)',
  },
  infoSection: {
    borderRightWidth: 1,
    borderRightColor: 'rgb(181,182,221)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  sectionNumber: {
    fontSize: 30,
    color: 'rgb(165, 45, 45)',
    fontWeight: '500',
  },
  sectionText: {
    fontSize: 15,
    fontWeight: '500',
    color: 'gray',
  },
});

export default FollowersBlockStyles;
