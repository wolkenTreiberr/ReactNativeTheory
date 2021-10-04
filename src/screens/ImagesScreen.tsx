import React, {useEffect, useState} from 'react';
import {
  ListRenderItemInfo,
  View,
  Text,
  FlatList,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import {Stack} from 'react-native-spacing-system';
import {useAppDispatch, useAppSelector} from '../hooks/ReduxHooks';
import {ImageApiInterface} from '../services/ImageApi';
import {PhotoDataResponse} from '../services/PhotoDataResponse';
import {PhotoModel} from '../redux/reducers/photosReducer';
import {fetchLike} from '../redux/actions/async/fetchLike';
import {fetchUnlike} from '../redux/actions/async/fetchUnlike';
import {fetchPhotos} from '../redux/actions/async/fetchPhotos';
import {fetchSearchData} from '../redux/actions/async/fetchSearchData';
import BackgroundForm from '../components/BackgroundForm';
import ImageCell from '../components/ImageCell';
import Header from '../components/Header';
import ImagesScreenstyle from './ImagesScreenstyles';
import SearchBar from '../components/SearchBar';

export interface ImagesScreenState {
  images: Array<PhotoModel>;
  imageApi: ImageApiInterface<PhotoDataResponse>;
}

const ImagesScreen: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const photos = useAppSelector(state => state.photos.items);
  const [searchValue, setSearchValue] = useState('');
  const refreshing = false;

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const renderItem = (itemInfo: ListRenderItemInfo<PhotoModel>) => {
    const {item} = itemInfo;
    const id = item.id;
    return (
      <View style={ImagesScreenstyle.imageContainer}>
        <ImageCell
          imageUrl={item.imageUrl}
          headerProps={{
            profileUrl: item.profileImageUrl,
            authorName: item.name,
          }}
          footerProps={{
            likesCounter: item.likesCount,
            isLiked: item.isLiked,
            onPress: () =>
              item.isLiked ? unlikeCallback(id) : likeCallback(id),
          }}
        />
      </View>
    );
  };

  const ListEmptyComponent = () => {
    return (
      <View style={ImagesScreenstyle.emptyContainer}>
        <Text style={ImagesScreenstyle.emptyText}>No images yet</Text>
      </View>
    );
  };

  const ItemSeparatorComponent = () => {
    return <Stack size={20} />;
  };

  const likeCallback = (id: string) => {
    return dispatch(fetchLike([id]));
  };

  const unlikeCallback = (id: string) => {
    return dispatch(fetchUnlike([id]));
  };

  const searchCallback = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const searchQuery = event.nativeEvent.text;

    dispatch(fetchSearchData(searchQuery));
  };

  const childrenKeys = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  return (
    <BackgroundForm
      containerStyle={ImagesScreenstyle.additionalView}
      formBackgroundColor={'darkslategrey'}
      prependedChildren={[
        <Header title=" Images" isEditable={false} key={childrenKeys()} />,
        <SearchBar
          placeholder={'search photo'}
          value={searchValue}
          onChangeText={text => setSearchValue(text)}
          onChange={searchCallback}
          key={childrenKeys()}
        />,
      ]}>
      <FlatList<PhotoModel>
        keyExtractor={(_, index) => String(index)}
        style={ImagesScreenstyle.flatList}
        data={photos}
        renderItem={renderItem}
        refreshing={refreshing}
        ListEmptyComponent={ListEmptyComponent}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </BackgroundForm>
  );
};

export default ImagesScreen;
