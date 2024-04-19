import { CommentClient } from '../@types/Comment';
import { mswInstance } from '../client';

const ROUTE = '/comments';

export const CommentService: CommentClient = {
  getComment: async id => {
    return await mswInstance.get(`/api/${ROUTE}/${id}`);
  },
  delete: async id => {
    return await mswInstance.delete(`/api/${ROUTE}/${id}`);
  },
  getAllComment: async () => {
    return await mswInstance.get(`api/${ROUTE}`);
  },
};
