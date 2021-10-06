import {PhotoDataResponse} from './ModelApi';
const baseUrl = 'https://api.unsplash.com';
const photos = '/photos';
const clientId = '8yscgpqKnOpuLMXmZ5loknhKeLM3i8UKT0be71pLFCw';
const token = 'UCeMiPKh-3s_9gkMwZicdX-cVYd0apZFYgk39HtiNDo';

export interface ImageApiInterface<T> {
  fetchPhotos(): Promise<Array<T>>;
}

export class ImageApi<T> implements ImageApiInterface<T> {
  private async init(
    path: string = photos,
    mehtod: string = 'GET',
  ): Promise<Response> {
    return fetch(baseUrl + path + `?client_id=${clientId}`, {
      method: mehtod,
      headers: {
        Accept: 'application/json',
      },
    });
  }

  async fetchPhotos(): Promise<Array<T>> {
    return this.init()
      .then(response => response.json())
      .then(data => {
        return data as T[];
      });
  }

  private async accessViaToken(id: string, method: string): Promise<Response> {
    return fetch(`${baseUrl}/photos/${id}/like`, {
      method: method,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async likePhoto(id: string): Promise<T> {
    return this.accessViaToken(id, 'POST')
      .then(response => response.json())
      .then(data => {
        return data as T;
      });
  }
  async unlikePhoto(id: string): Promise<T> {
    return this.accessViaToken(id, 'DELETE')
      .then(response => response.json())
      .then(data => {
        return data as T;
      });
  }
}

export const imageApi = new ImageApi<PhotoDataResponse>();
