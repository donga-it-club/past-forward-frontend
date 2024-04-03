export const Order = {
  RECENTLY: 'RECENTLY',
  PREVIOUSLY: 'PREVIOUSLY',
} as const;

export const Status = {
  RECENTLY: 'RECENTLY',
  PREVIOUSLY: 'PREVIOUSLY',
} as const;

export type TStatus = typeof Status;
export type TOrder = typeof Order;
