import { NotificationType, TNotificationType } from '@/api/@types/@asConst';

export const NOTIFICATION_TYPE_LABEL: Record<TNotificationType, string> = {
  [NotificationType.COMMENT]: '댓글',
  [NotificationType.LIKE]: '좋아요',
};
