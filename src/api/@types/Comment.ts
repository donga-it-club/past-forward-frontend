export interface CommentRequest {
  id: string;
}

export interface CommentResponse {
  id: string;
  name: string;
  text: string;
}

export interface CommentClient {
  getComment(req: CommentRequest): Promise<CommentResponse>;
}
