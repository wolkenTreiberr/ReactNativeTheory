import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo, ImageSourcePropType} from 'react-native';
import SubscribersScreenstyle from './SubscribersScreenstyles';
import BackgroundForm from '../components/BackgroundForm';
import Header from '../components/Header';
import SubscriberCell from '../components/SubscriberCell';

export interface SubscriberItem {
  image?: ImageSourcePropType;
  title: string;
  description: string;
  isFollowing: boolean;
  key: string;
}

function SubscribersScreen() {
  const [subscribers, setSubscribers] = useState<SubscriberItem[]>([
    {
      image: require('../../images/avatar.jpg'),
      title: 'First user',
      description: 'Description...',
      isFollowing: true,
      key: '1',
    },
    {
      image: require('../../images/avatar.jpg'),
      title: 'Second user',
      description: 'Description...',
      isFollowing: false,
      key: '2',
    },
    {
      image: require('../../images/avatar.jpg'),
      title: 'First user',
      description: 'Description...',
      isFollowing: true,
      key: '3',
    },
    {
      image: require('../../images/avatar.jpg'),
      title: 'Second user',
      description: 'Description...',
      isFollowing: false,
      key: '4',
    },
    {
      image: require('../../images/avatar.jpg'),
      title: 'First user',
      description: 'Description...',
      isFollowing: true,
      key: '5',
    },
    {
      image: require('../../images/avatar.jpg'),
      title: 'Second user',
      description: 'Description...',
      isFollowing: false,
      key: '6',
    },
    {
      image: require('../../images/avatar.jpg'),
      title: 'First user',
      description: 'Description...',
      isFollowing: true,
      key: '7',
    },
    {
      image: require('../../images/avatar.jpg'),
      title: 'Second user',
      description: 'Description...',
      isFollowing: false,
      key: '8',
    },
    {
      image: require('../../images/avatar.jpg'),
      title: 'First user',
      description: 'Description...',
      isFollowing: true,
      key: '9',
    },
    {
      image: require('../../images/avatar.jpg'),
      title: 'Second user',
      description: 'Description...',
      isFollowing: false,
      key: '10',
    },
  ]);

  const toggleFollow = (key: string) => {
    setSubscribers(
      subscribers.filter(item => {
        if (item.key === key) {
          item.isFollowing = !item.isFollowing;
        }
        return item;
      }),
    );
  };

  const renderItem = ({item}: ListRenderItemInfo<SubscriberItem>) => {
    return (
      <SubscriberCell
        subscriber={item}
        onPressFollowButton={() => toggleFollow(item.key)}
      />
    );
  };

  return (
    <BackgroundForm
      containerStyle={SubscribersScreenstyle.viewContainer}
      prependedChildren={[<Header title="Subscribers" isEditable={false} />]}>
      <FlatList
        style={SubscribersScreenstyle.flatList}
        data={subscribers}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
    </BackgroundForm>
  );
}

export default SubscribersScreen;
