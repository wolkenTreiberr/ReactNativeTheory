import React, {Component} from 'react';
import {Text, View} from 'react-native';
import FollowersBlockstyles from './FollowersBlockstyles';

interface FollowersBlockProps {
  followers: number;
  following: number;
}

class FollowersBlock extends Component<FollowersBlockProps, {}> {
  render() {
    return (
      <View style={FollowersBlockstyles.userInfoContainer}>
        <View style={FollowersBlockstyles.infoSection}>
          <Text style={FollowersBlockstyles.sectionNumber}>
            {this.props.followers}
          </Text>
          <Text style={FollowersBlockstyles.sectionText}>Followers</Text>
        </View>
        <View style={FollowersBlockstyles.infoSection}>
          <Text style={FollowersBlockstyles.sectionNumber}>
            {this.props.following}
          </Text>
          <Text style={FollowersBlockstyles.sectionText}>Following</Text>
        </View>
      </View>
    );
  }
}

export default FollowersBlock;
