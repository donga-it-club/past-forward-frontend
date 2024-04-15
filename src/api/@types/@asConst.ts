export const Order = {
  RECENTLY: 'RECENTLY',
  PREVIOUSLY: 'PREVIOUSLY',
} as const;

export const Status = {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
} as const;

export const RetrospectiveType = {
  TEAM: 'TEAM',
  PERSONAL: 'PERSONAL',
};

export const Template = {
  1: 'Keep',
  2: 'Ploblem',
  3: 'Try',
  4: 'Action Items',
} as const;

export type TStatus = typeof Status;
export type TOrder = typeof Order;
export type TTemplate = typeof Template;
export type TRetrospective = typeof RetrospectiveType;
