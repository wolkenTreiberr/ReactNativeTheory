import {RequestType} from '../hooks/enums';
import {request} from './apiManager';
import {PhotoDataResponse} from './PhotoDataResponse';
import {PhotoLikeResponse} from './PhotoLikeResponse';
import {SearchDataResponse} from './SearchDataResponse';

export interface ImageApiInterface<T> {
  fetchPhotos(): Promise<Array<T>>;
  searchPhotos(urlParams: object): Promise<T>;
  likePhoto(id: string[]): Promise<T>;
  unlikePhoto(id: string[]): Promise<T>;
}

export class ImageApi<T> implements ImageApiInterface<T> {
  private token: string = 'UCeMiPKh-3s_9gkMwZicdX-cVYd0apZFYgk39HtiNDo';

  async fetchPhotos(): Promise<Array<T>> {
    return request<Array<T>>(RequestType.fetchPhotos, {
      token: this.token,
    });
  }

  async likePhoto(id: string[]): Promise<T> {
    return request<T>(RequestType.likePhoto, {
      token: this.token,
      params: id,
    });
  }

  async unlikePhoto(id: string[]): Promise<T> {
    return request<T>(RequestType.unlikePhoto, {
      token: this.token,
      params: id,
    });
  }

  async searchPhotos(urlParams: object): Promise<T> {
    return request<T>(RequestType.searchPhotos, {
      token: this.token,
      urlParams,
    });
  }
}

export const imageApi = new ImageApi<PhotoDataResponse>();
export const likeImageApi = new ImageApi<PhotoLikeResponse>();
export const searchImageApi = new ImageApi<SearchDataResponse>();
