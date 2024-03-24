import { CommentClient } from '../@types/Comment';
import { mswInstance } from '../client';

const ROUTE = '/comments';

export const CommentService: CommentClient = {
  getComment: async () => {
    return await mswInstance.get(`${ROUTE}/get`);
  },
};
