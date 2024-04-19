export interface GetCommentRequest {
  id: string;
}

export interface GetCommentResponse {
  code: number;
  message: string;
  data: {
    id: number;
    content: string;
  };
}

//put
export interface PutCommentRequest {
  id: number;
}

//delete
export interface DeleteCommentRequest {
  id: number;
}

export interface DeleteCommentResponse {
  code: number;
  message: string;
  data: object;
}

//GetAllComment
export interface AllGetCommentResponse {
  code: number;
  message: string;
  data: CommentData[];
}

export interface CommentData {
  id: number;
  comment: string;
}

//Post

export interface CommentClient {
  getComment(request: GetCommentRequest): Promise<GetCommentResponse>;
  delete(request: DeleteCommentRequest): Promise<DeleteCommentResponse>;
  getAllComment(): Promise<AllGetCommentResponse>;
}
