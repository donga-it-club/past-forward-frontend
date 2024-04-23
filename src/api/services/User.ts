import { UserClient } from '../@types/Users';
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
};
