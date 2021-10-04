import {createAsyncThunk} from '@reduxjs/toolkit';
import {searchImageApi} from '../../../services/ImageApi';
import {PhotoModel} from '../../reducers/photosReducer';

export const fetchSearchData = createAsyncThunk<Array<PhotoModel>, string>(
  'photos/searchPhotos',
  async (keyword, thunkApi) => {
    const searchQuery = {query: keyword};

    try {
      const response = await searchImageApi.searchPhotos(searchQuery);

      return response.results.map(item => ({
        id: item.id,
        imageUrl: item.urls?.small,
        isLiked: item.liked_by_user,
        name: item.user?.name,
        likesCount: item.likes,
        profileImageUrl: item.user?.profile_image?.small,
      }));
    } catch (error) {
      console.log('fetchPhotos error: ', error);
      return thunkApi.rejectWithValue(error);
    }
  },
);
