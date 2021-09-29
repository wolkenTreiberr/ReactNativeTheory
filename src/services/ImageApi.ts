const baseUrl = 'https://api.unsplash.com';
const photos = '/photos';
const clientId = '8yscgpqKnOpuLMXmZ5loknhKeLM3i8UKT0be71pLFCw';

export interface ImageApiInterface<T> {
  fetchPhotos(): Promise<Array<T>>;
}

export class ImageApi<T> implements ImageApiInterface<T> {
  private async init(
    path: string = photos,
    mehtod: string = 'GET',
  ): Promise<Response> {
    return fetch(
      baseUrl +
        path +
        '/?client_id=8yscgpqKnOpuLMXmZ5loknhKeLM3i8UKT0be71pLFCw',
      {
        method: mehtod,
        headers: {
          Accept: 'application/json',
          Authorization: `CLIENT-ID ${clientId}`,
        },
      },
    );
  }

  async fetchPhotos(): Promise<Array<T>> {
    return this.init()
      .then(response => response.json())
      .then(data => {
        return data as T[];
      });
  }

  async likePhoto(id: string): Promise<T> {
    return this.init(`/photos/${id}/like`, 'POST')
      .then(response => response.json())
      .then(data => {
        return data as T;
      });
  }
  async unlikePhoto(id: string): Promise<T> {
    return this.init(`/photos/${id}/like`, 'DELETE')
      .then(response => response.json())
      .then(data => {
        return data as T;
      });
  }
}
