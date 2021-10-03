import React, {useState, useEffect} from 'react';
import {ListRenderItemInfo, View, Text, FlatList} from 'react-native';
import {Stack} from 'react-native-spacing-system';
import Header from '../components/Header';
import BackgroundForm from '../components/BackgroundForm';
import ImageCell from '../components/ImageCell';
import ImageCellFooter from '../components/ImageCellFooter';
import ImagesScreenstyle from './ImagesScreenstyles';
import {ImageApiInterface, ImageApi} from '../services/ImageApi';
import {PhotoDataResponse} from '../services/ModelApi';
import {PhotoLikeResponse} from '../services/PhotoLikeResponse';

type PhotoModel = {
  id: string;
  imageUrl?: string;
  profileImageUrl?: string;
  name?: string;
  likesCount?: number;
  isLiked?: boolean;
};

export interface ImagesScreenState {
  images: Array<PhotoModel>;
  imageApi: ImageApiInterface<PhotoDataResponse>;
}

const ImagesScreen = () => {
  const [state, setState] = useState({images: [] as PhotoModel[]});
  const refreshing = false;
  const imageApi = new ImageApi<PhotoDataResponse>();

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
        />
        <ImageCellFooter
          likesCounter={item.likesCount}
          isLiked={item.isLiked}
          onPress={() => (item.isLiked ? unlikeCallback(id) : likeCallback(id))}
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
    imageApi
      .likePhoto(id)
      .then((value: PhotoLikeResponse) => {
        const updatedImages = state.images.map(user => {
          if (user.id === id) {
            return (user = {
              id: user.id,
              imageUrl: user.imageUrl,
              name: user.name,
              profileImageUrl: user.profileImageUrl,
              isLiked: value.photo?.liked_by_user,
              likesCount: value.photo?.likes,
            });
          } else {
            return user;
          }
        });

        setState({images: updatedImages});
      })
      .catch(error => console.log(error));
  };

  const unlikeCallback = (id: string) => {
    imageApi
      .unlikePhoto(id)
      .then((value: PhotoLikeResponse) => {
        const updatedImages = state.images.map(user => {
          if (user.id === id) {
            return (user = {
              id: user.id,
              imageUrl: user.imageUrl,
              name: user.name,
              profileImageUrl: user.profileImageUrl,
              isLiked: value.photo?.liked_by_user,
              likesCount: value.photo?.likes,
            });
          } else {
            return user;
          }
        });

        setState({images: updatedImages});
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    const fetchData = () => {
      imageApi
        .fetchPhotos()
        .then((values: Array<PhotoDataResponse>) => {
          setState({
            images: values.map((value: PhotoDataResponse) => ({
              id: value.id,
              imageUrl: value.urls?.small,
              isLiked: value.liked_by_user,
              name: value.user?.name,
              likesCount: value.likes,
              profileImageUrl: value.user?.profile_image?.small,
            })),
          });
        })
        .catch(error => {
          console.log('fetch error: ', error);
        });
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const childrenKeys = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  return (
    <BackgroundForm
      containerStyle={ImagesScreenstyle.additionalView}
      formBackgroundColor={'darkslategrey'}
      prependedChildren={[
        <Header title="Images" isEditable={false} key={childrenKeys()} />,
      ]}>
      <FlatList<PhotoModel>
        keyExtractor={(_, index) => String(index)}
        style={ImagesScreenstyle.flatList}
        data={state.images}
        renderItem={renderItem}
        refreshing={refreshing}
        ListEmptyComponent={ListEmptyComponent}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </BackgroundForm>
  );
};

export default ImagesScreen;
