import {createAsyncThunk} from '@reduxjs/toolkit';
import {likeImageApi} from '../../../services/ImageApi';
import {PhotoModel} from '../../reducers/photosReducer';
import {AppDispatch, RootState} from '../../store/Index';

export const fetchUnlike = createAsyncThunk<
  PhotoModel,
  string[],
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>('photos/fetchUnlike', async (id, thunkApi) => {
  try {
    const response = await likeImageApi.unlikePhoto(id);
    return {
      id: response.photo.id,
      likesCount: response.photo.likes,
      isLiked: response.photo.liked_by_user,
    } as PhotoModel;
  } catch (error) {
    console.log('fetchPhotos error: ', error);
    return thunkApi.rejectWithValue(error);
  }
});
