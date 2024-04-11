export const Order = {
  RECENTLY: 'RECENTLY',
  PREVIOUSLY: 'PREVIOUSLY',
} as const;

export const Status = {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
} as const;

export type TStatus = typeof Status;
export type TOrder = typeof Order;
