export interface User {
  id: number;
  username: string;
  fullName: string;
}

export interface Comment {
  id: number;
  postId: number;
  body: string;
  likes: number;
  user: User;
}

export interface CommentResponse {
  comments: Comment[];
  total: number;
  skip: number;
  limit: number;
}