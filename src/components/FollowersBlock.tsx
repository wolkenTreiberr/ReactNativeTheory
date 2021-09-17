/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
interface IFollowersBlockProps {
  followers: number;
  following: number;
}
class FollowersBlock extends Component<IFollowersBlockProps, {}> {
  render() {
    return (
      <View style={styles.userInfoContainer}>
        <View
          style={[
            styles.InfoSection,
            {borderRightWidth: 1, borderRightColor: 'rgb(181,182,221)'},
          ]}>
          <Text style={styles.infoNumber}>{this.props.followers}</Text>
          <Text style={styles.infoText}>Followers</Text>
        </View>
        <View style={styles.InfoSection}>
          <Text style={styles.infoNumber}>{this.props.following}</Text>
          <Text style={styles.infoText}>Following</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  InfoSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  infoNumber: {
    fontSize: 30,
    color: 'rgb(165, 45, 45)',
    fontWeight: '500',
  },
  infoText: {
    fontSize: 15,
    fontWeight: '500',
    color: 'gray',
  },
});

export default FollowersBlock;
