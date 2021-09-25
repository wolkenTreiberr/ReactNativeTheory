import React, {Component} from 'react';
import {Text, View} from 'react-native';
import FollowersBlockStyles from './FollowersBlockStyles';

interface FollowersBlockProps {
  followers: number;
  following: number;
}

class FollowersBlock extends Component<FollowersBlockProps, {}> {
  render() {
    return (
      <View style={FollowersBlockStyles.userInfoContainer}>
        <View style={FollowersBlockStyles.infoSection}>
          <Text style={FollowersBlockStyles.sectionNumber}>
            {this.props.followers}
          </Text>
          <Text style={FollowersBlockStyles.sectionText}>Followers</Text>
        </View>
        <View style={FollowersBlockStyles.infoSection}>
          <Text style={FollowersBlockStyles.sectionNumber}>
            {this.props.following}
          </Text>
          <Text style={FollowersBlockStyles.sectionText}>Following</Text>
        </View>
      </View>
    );
  }
}

export default FollowersBlock;
