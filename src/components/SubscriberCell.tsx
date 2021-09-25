import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {SubscriberItem} from '../screens/SubscribersScreen';
import FilledButton from './FilledButton';
import SubscriberCellStyles from './SubscriberCellStyles';

interface SubscriberCellProps {
  subscriber: SubscriberItem;
  onPressFollowButton: () => void;
}

class SubscriberCell extends Component<SubscriberCellProps, {}> {
  render() {
    return (
      <View style={SubscriberCellStyles.viewContainer}>
        <Image
          source={this.props.subscriber.image}
          style={SubscriberCellStyles.userImage}
        />
        <View>
          <Text style={SubscriberCellStyles.userTitle}>
            {this.props.subscriber.title}
          </Text>
          <Text style={SubscriberCellStyles.userDescription}>
            {this.props.subscriber.description}
          </Text>
        </View>
        {this.props.subscriber.isFollowing ? (
          <FilledButton
            title={'Follow'}
            filledButtonStyle={SubscriberCellStyles.followButton}
            onPress={this.props.onPressFollowButton}
          />
        ) : (
          <FilledButton
            title={'Following'}
            filledButtonStyle={SubscriberCellStyles.followingButton}
            onPress={this.props.onPressFollowButton}
          />
        )}
      </View>
    );
  }
}

export default SubscriberCell;
