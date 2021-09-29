import React, {useState, useEffect} from 'react';
import {
  ListRenderItemInfo,
  View,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';
import {Stack} from 'react-native-spacing-system';
import Header from '../components/Header';
import BackgroundForm from '../components/BackgroundForm';
import ImageCell from '../components/ImageCell';
import ImageCellFooter from '../components/ImageCellFooter';
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
  const imageApi = new ImageApi<PhotoDataResponse>();

  const renderItem = (itemInfo: ListRenderItemInfo<PhotoModel>) => {
    const {item} = itemInfo;
    const id = item.id;
    return (
      <View style={styles.imageContainer}>
        <ImageCell
          imageUrl={item.imageUrl}
          headerProps={{
            profileUrl: item.profileImageUrl,
            authorName: item.name,
          }}
        />
        <ImageCellFooter
          likes={item.likesCount}
          liked={item.isLiked}
          onPress={() => (item.isLiked ? unlikeCallback(id) : likeCallback(id))}
        />
      </View>
    );
  };

  const ListEmptyComponent = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No images yet</Text>
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

  useEffect(() => {
    fetchData();
  });

  return (
    <BackgroundForm
      containerStyle={styles.additionalView}
      // formBackgroundColor={'darkslategrey'}
      prependedChildren={[<Header title="Images" isEditable={false} />]}>
      <FlatList<PhotoModel>
        keyExtractor={(_, index) => String(index)}
        style={styles.flatList}
        data={state.images}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </BackgroundForm>
  );
};

export default ImagesScreen;

const styles = StyleSheet.create({
  additionalView: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    alignItems: 'center',
    borderTopRightRadius: 20,
    paddingHorizontal: 0,
    paddingTop: 30,
    paddingBottom: 50,
    marginTop: 20,
  },
  flatList: {
    flex: 1,
    width: '100%',
  },
  imageContainer: {
    width: '100%',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
