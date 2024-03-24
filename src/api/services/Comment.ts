import { CommentClient } from '../@types/Comment';
import { axiosInstance } from '../client';

const ROUTE = '/comments';

export const CommentService: CommentClient = {
  getComment: async request => {
    return await axiosInstance.get(`${ROUTE}/get`, {
      params: request,
    });
  },
};
