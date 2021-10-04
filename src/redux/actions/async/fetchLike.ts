import {createAsyncThunk} from '@reduxjs/toolkit';
import {likeImageApi} from '../../../services/ImageApi';
import {PhotoModel} from '../../reducers/photosReducer';
import {AppDispatch, RootState} from '../../store/Index';

export const fetchLike = createAsyncThunk<
  PhotoModel,
  string[],
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>('photos/fetchLike', async (id, thunkApi) => {
  try {
    const response = await likeImageApi.likePhoto(id);
    return {
      id: response.photo.id,
      likesCount: response.photo.likes,
      isLiked: response.photo.liked_by_user,
    };
  } catch (error) {
    console.log('fetchPhotos error: ', error);
    return thunkApi.rejectWithValue(error);
  }
});
