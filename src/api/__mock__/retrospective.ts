import { Status } from '../@types/@enums';
import { GetRetrospectiveResponse } from '../@types/Retrospectives';

export const MockRetrospective: GetRetrospectiveResponse = {
  code: 0,
  message: 'okay',
  data: {
    totalCount: 0,
    nodes: [
      {
        id: 0,
        title: 'hee',
        userId: 0,
        templateId: 0,
        status: Status.COMPLETED,
        isBookmarked: true,
        thumbnail: '3fa85f64',
      },
    ],
  },
};
