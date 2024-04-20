import { CommentClient, DeleteCommentRequest, PostCommentRequest, PostCommentResponse } from '../@types/Comment';
import axiosInstance from '../axiosConfig';

const ROUTE = '/comments';

export const CommentService: CommentClient = {
  post: async (request: PostCommentRequest): Promise<PostCommentResponse> => {
    try {
      const response = await axiosInstance.post(`${ROUTE}`, request);
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
  delete: async ({ commentId }: DeleteCommentRequest) => {
    try {
      const response = await axiosInstance.delete(`${ROUTE}/${commentId}`);
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
  put: async ({ commentId, ...request }) => {
    try {
      const response = await axiosInstance.put(`${ROUTE}/${commentId}`, request);
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
};
