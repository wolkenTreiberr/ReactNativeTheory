import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {SubscriberItem} from '../screens/SubscribersScreen';
import FilledButton from './FilledButton';
import SubscriberCellstyles from './SubscriberCellstyles';

interface SubscriberCellProps {
  subscriber: SubscriberItem;
  onPressFollowButton: () => void;
}

class SubscriberCell extends Component<SubscriberCellProps, {}> {
  render() {
    return (
      <View style={SubscriberCellstyles.viewContainer}>
        <Image
          source={this.props.subscriber.image}
          style={SubscriberCellstyles.userImage}
        />
        <View>
          <Text style={SubscriberCellstyles.userTitle}>
            {this.props.subscriber.title}
          </Text>
          <Text style={SubscriberCellstyles.userDescription}>
            {this.props.subscriber.description}
          </Text>
        </View>
        {this.props.subscriber.isFollowing ? (
          <FilledButton
            title={'Follow'}
            filledButtonStyle={SubscriberCellstyles.followButton}
            onPress={this.props.onPressFollowButton}
          />
        ) : (
          <FilledButton
            title={'Following'}
            filledButtonStyle={SubscriberCellstyles.followingButton}
            onPress={this.props.onPressFollowButton}
          />
        )}
      </View>
    );
  }
}

export default SubscriberCell;
