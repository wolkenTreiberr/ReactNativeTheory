import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

import {SubscriberItem} from '../screens/SubscribersScreen';
import FilledButton from './FilledButton';

interface SubscriberCellProps {
  subscriber: SubscriberItem;
  onPressFollowButton: () => void;
}

class SubscriberCell extends Component<SubscriberCellProps, {}> {
  render() {
    return (
      <View style={styles.viewContainer}>
        <Image source={this.props.subscriber.image} style={styles.imageStyle} />
        <View>
          <Text style={styles.titleStyle}>{this.props.subscriber.title}</Text>
          <Text style={styles.descriptionStyle}>
            {this.props.subscriber.description}
          </Text>
        </View>
        {this.props.subscriber.isFollowing ? (
          <FilledButton
            title={'Follow'}
            filledButtonStyle={styles.followButtonStyle}
            onPress={this.props.onPressFollowButton}
          />
        ) : (
          <FilledButton
            title={'Following'}
            filledButtonStyle={styles.followingButtonStyle}
            onPress={this.props.onPressFollowButton}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 67,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  imageStyle: {
    width: 47,
    height: 47,
    borderRadius: 8,
    marginRight: 10,
  },
  titleStyle: {
    color: 'rgb(77, 81, 128)',
    fontSize: 17,
    fontWeight: '700',
  },
  descriptionStyle: {
    color: 'rgb(181, 182, 221)',
    fontSize: 12,
  },
  followButtonStyle: {
    height: 29,
    width: 92,
    fontSize: 12,
    backgroundColor: 'rgb(64, 80, 164)',
    color: 'white',
    marginLeft: 'auto',
  },
  followingButtonStyle: {
    height: 29,
    width: 92,
    fontSize: 12,
    backgroundColor: 'rgb(190, 198, 255)',
    color: 'rgb(77, 91, 177)',
    marginLeft: 'auto',
  },
});

export default SubscriberCell;
