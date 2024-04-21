//post
export interface PostCommentRequest {
  sectionId: number;
  commentContent: string;
}

export interface PostCommentResponse {
  code: number;
  message: string;
  data: PostCommentData;
}

export interface PostCommentData {
  id: number;
  userId: number;
  sectionId: number;
  commentContent: string;
}

//put
export interface PutCommentRequest {
  commentId: number;
  commentContent: string;
}

export interface PutCommentResponse {
  code: number;
  message: string;
  data: PutCommentData;
}

export interface PutCommentData {
  commentId: number;
  content: string;
}

//delete
export interface DeleteCommentRequest {
  commentId: number;
}

export interface DeleteCommentResponse {
  code: number;
}

export interface CommentClient {
  post(request: PostCommentRequest): Promise<PostCommentResponse>;
  delete(request: DeleteCommentRequest): Promise<DeleteCommentResponse>;
  put(request: PutCommentRequest): Promise<PutCommentResponse>;
}
