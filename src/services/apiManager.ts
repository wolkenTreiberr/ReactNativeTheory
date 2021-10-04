import {URLType} from '../hooks/enums';
import {Domain} from '../hooks/enums';
import {RequestType} from '../hooks/enums';

const getRequestService = (requestType: RequestType) => {
  switch (requestType) {
    case RequestType.fetchPhotos:
    case RequestType.likePhoto:
    case RequestType.unlikePhoto:
      return 'photos/';
    case RequestType.searchPhotos:
      return 'search/';
    default:
      return '';
  }
};

const getRequestString = (requestType: RequestType, params: string[]) => {
  const serviceType = getRequestService(requestType);

  switch (requestType) {
    case RequestType.fetchPhotos:
      return serviceType;
    case RequestType.likePhoto:
    case RequestType.unlikePhoto:
      return serviceType + params[0] + '/like';
    case RequestType.searchPhotos:
      return serviceType + '/photos';
  }
};

const getRequestType = (requestType: RequestType) => {
  switch (requestType) {
    case RequestType.fetchPhotos:
    case RequestType.searchPhotos:
      return 'GET';
    case RequestType.likePhoto:
      return 'Post';
    case RequestType.unlikePhoto:
      return 'DELETE';
  }
};

const getContentType = (requestType: RequestType) => {
  switch (requestType) {
    default:
      return 'application/json';
  }
};

const needAuthorization = (requestType: RequestType) => {
  switch (requestType) {
    default:
      return true;
  }
};

const createBody = (requestType: RequestType, body?: Object | undefined) => {
  switch (requestType) {
    default:
      return JSON.stringify(body);
  }
};

export const request = async <T>(
  requestType: RequestType,
  params: {
    body?: Object;
    token?: string;
    urlParams?: Object;
    params?: string[];
  },
  serverType: URLType = URLType.api,
  domain: Domain = Domain.unsplash,
) => {
  let headers: HeadersInit_ = {
    'Content-Type': getContentType(requestType),
  };

  if (needAuthorization(requestType)) {
    headers = {...headers, Authorization: 'Bearer ' + params.token || ''};
  }

  let paramsString = '';
  if (params.urlParams) {
    for (const [key, value] of Object.entries(params.urlParams)) {
      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          value.forEach(item => {
            paramsString += paramsString.length === 0 ? '?' : '&';
            paramsString += key + '=' + item;
          });
        } else {
          paramsString += paramsString.length === 0 ? '?' : '&';
          paramsString += key + '=' + value;
        }
      }
    }
  }

  const url =
    serverType +
    domain +
    getRequestString(requestType, params.params || []) +
    paramsString;

  return new Promise<T>((resolve, reject) => {
    fetch(url, {
      method: getRequestType(requestType),
      headers,
      body: createBody(requestType, params.body),
    })
      .then(response => {
        if (response.status === 401) {
          reject('Unauthorised');
        } else {
          response
            .json()
            .then((data: T) => {
              resolve(data);
            })
            .catch(err => {
              reject(err.message);
            });
        }
      })
      .catch(err => {
        console.log('err', err);
        reject(err);
      });
  });
};
