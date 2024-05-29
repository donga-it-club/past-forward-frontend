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
  notificationType: string;
  dateTime: string;
}

export interface notificationClient {
  get(): Promise<NotificationResponse>;
}
