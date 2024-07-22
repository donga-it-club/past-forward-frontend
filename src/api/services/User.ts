import { PostUserRequest, UserClient } from '../@types/Users';
import axiosInstance from '../axiosConfig';

const ROUTE = 'users';

export const UserServices: UserClient = {
  get: async () => {
    try {
      const response = await axiosInstance.get(`/${ROUTE}/me`);
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
  post: async (request: PostUserRequest): Promise<void> => {
    try {
      const response = await axiosInstance.post(`/${ROUTE}/me/admin-status`, request);
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
};
