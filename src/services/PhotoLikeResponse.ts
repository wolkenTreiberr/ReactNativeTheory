export interface PhotoLikeResponse {
  photo: {
    id: string;
    likes: number;
    liked_by_user: boolean;
  };
}
