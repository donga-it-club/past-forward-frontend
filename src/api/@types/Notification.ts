import { TNotificationType } from './@asConst';

export interface NotificationResponse {
  code: number;
  message: string;
  data: NotificationData[];
}

export interface NotificationData {
  notificationId: number;
  sectionId: number;
  retrospectiveTitle: string;
  receiverId: number;
  senderName: string;
  thumbnail: string;
  notificationType: TNotificationType;
  dateTime: string;
}

export interface PostNotificationRequest {
  notificationId: string;
}

export interface PostNotificationResponse {
  code: number;
  message: string;
  data: object;
}

export interface DeleteNotificationRequest {
  userId: number;
}

export interface DeleteNotificationResponse {
  code: number;
  message: string;
  data: object;
}

export interface notificationClient {
  get(): Promise<NotificationResponse>;
  readPost(request: PostNotificationRequest): Promise<PostNotificationResponse>;
  delete(request: DeleteNotificationRequest): Promise<DeleteNotificationResponse>;
}
