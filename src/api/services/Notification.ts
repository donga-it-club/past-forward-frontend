import { notificationClient as NotificationClient, NotificationResponse } from '../@types/Notification';
import axiosInstance from '../axiosConfig';

const ROUTE = 'notifications';

export const NotificationServices: NotificationClient = {
  get: async (): Promise<NotificationResponse> => {
    try {
      const response = await axiosInstance.get<NotificationResponse>(`${ROUTE}/`);
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
};
