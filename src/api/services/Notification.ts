import {
  DeleteNotificationRequest,
  DeleteNotificationResponse,
  notificationClient as NotificationClient,
  NotificationResponse,
  PostNotificationRequest,
  PostNotificationResponse,
} from '../@types/Notification';
import axiosInstance from '../axiosConfig';

const ROUTE = 'notifications';

export const NotificationServices: NotificationClient = {
  get: async (): Promise<NotificationResponse> => {
    try {
      const response = await axiosInstance.get<NotificationResponse>(`${ROUTE}`);
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
  readPost: async ({ notificationId }: PostNotificationRequest): Promise<PostNotificationResponse> => {
    try {
      const response = await axiosInstance.post<PostNotificationResponse>(`${ROUTE}/${notificationId}`);
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
  delete: async ({ userId }: DeleteNotificationRequest): Promise<DeleteNotificationResponse> => {
    try {
      const response = await axiosInstance.post<DeleteNotificationResponse>(`${ROUTE}/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
};
