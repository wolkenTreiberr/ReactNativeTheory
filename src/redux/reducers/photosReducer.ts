import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchPhotos} from '../actions/async/fetchPhotos';
import {fetchLike} from '../actions/async/fetchLike';
import {fetchUnlike} from '../actions/async/fetchUnlike';
import {fetchSearchData} from '../actions/async/fetchSearchData';

export interface PhotoModel {
  id: string;
  imageUrl?: string;
  isLiked: boolean;
  profileImageUrl?: string;
  name?: string;
  likesCount: number;
}

interface PhotosState {
  items: Array<PhotoModel>;
  loading: boolean;
  error: string | null;
}

const initialState: PhotosState = {items: [], loading: false, error: null};

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    setPhotos: (state, action: PayloadAction<Array<PhotoModel>>) => {
      state.items = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(fetchLike.fulfilled, (state, action) => {
      let getPost = state.items.find(
        (item: PhotoModel) => item.id === action.payload.id,
      );
      getPost
        ? ((getPost.isLiked = action.payload.isLiked),
          (getPost.likesCount = action.payload.likesCount))
        : null;
    });
    builder.addCase(fetchUnlike.fulfilled, (state, action) => {
      let getPost = state.items.find(
        (item: PhotoModel) => item.id === action.payload.id,
      );
      getPost
        ? ((getPost.isLiked = action.payload.isLiked),
          (getPost.likesCount = action.payload.likesCount))
        : null;
    });
    builder.addCase(fetchSearchData.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const {setPhotos} = photosSlice.actions;
export default photosSlice.reducer;
