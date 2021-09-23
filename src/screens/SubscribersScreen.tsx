import React, {useState, useCallback} from 'react';
import {
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
  ImageSourcePropType,
} from 'react-native';

import produce from 'immer';
import BackgroundForm from '../components/BackgroundForm';
import Header from '../components/Header';
import SubscriberCell from '../components/SubscriberCell';

export interface SubscriberItem {
  image?: ImageSourcePropType;
  title: string;
  description: string;
  isFollowing: boolean;
  id: string;
}

function SubscribersScreen() {
  const [subscribers, setSubscribers] = useState<SubscriberItem[]>([
    {
      image: require('../../images/avatar.jpg'),
      title: 'First user',
      description: 'Description...',
      isFollowing: true,
      id: '1',
    },
    {
      image: require('../../images/avatar.jpg'),
      title: 'Second user',
      description: 'Description...',
      isFollowing: false,
      id: '2',
    },
    {
      image: require('../../images/avatar.jpg'),
      title: 'First user',
      description: 'Description...',
      isFollowing: true,
      id: '3',
    },
    {
      image: require('../../images/avatar.jpg'),
      title: 'Second user',
      description: 'Description...',
      isFollowing: false,
      id: '4',
    },
    {
      image: require('../../images/avatar.jpg'),
      title: 'First user',
      description: 'Description...',
      isFollowing: true,
      id: '5',
    },
    {
      image: require('../../images/avatar.jpg'),
      title: 'Second user',
      description: 'Description...',
      isFollowing: false,
      id: '6',
    },
    {
      image: require('../../images/avatar.jpg'),
      title: 'First user',
      description: 'Description...',
      isFollowing: true,
      id: '7',
    },
    {
      image: require('../../images/avatar.jpg'),
      title: 'Second user',
      description: 'Description...',
      isFollowing: false,
      id: '8',
    },
    {
      image: require('../../images/avatar.jpg'),
      title: 'First user',
      description: 'Description...',
      isFollowing: true,
      id: '9',
    },
    {
      image: require('../../images/avatar.jpg'),
      title: 'Second user',
      description: 'Description...',
      isFollowing: false,
      id: '10',
    },
  ]);

  const toggleFollow = useCallback((id: string) => {
    setSubscribers(
      produce(draft => {
        draft.find(item => {
          if (item.id === id) {
            item.isFollowing = !item.isFollowing;
          }
        });
      }),
    );
  }, []);

  const renderItem = ({item}: ListRenderItemInfo<SubscriberItem>) => {
    return (
      <SubscriberCell
        subscriber={item}
        onPressFollowButton={() => toggleFollow(item.id)}
      />
    );
  };
  return (
    <BackgroundForm
      viewStyle={styles.viewStyle}
      prepend={<Header title="Subscribers" isEditable={false} />}>
      <FlatList
        style={styles.flatListStyle}
        data={subscribers}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </BackgroundForm>
  );
}
const styles = StyleSheet.create({
  viewStyle: {
    flex: 0.96,
    width: '100%',
    backgroundColor: 'white',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 21,
  },
  flatListStyle: {
    flex: 1,
    height: 1000,
  },
});

export default SubscribersScreen;
