import { Status } from '../@types/@asConst';
import { onlyGetRetrospectiveResponse, RetrospectiveResponse } from '../@types/Retrospectives';

export const MockRetrospective: RetrospectiveResponse = {
  code: 202,
  message: 'success',
  data: {
    id: 0,
    title: 'hee',
    userId: 0,
    teamId: 1,
    templateId: 1,
    status: Status.NOT_STARTED,
    isBookmarked: true,
    thumbnail: '3fa85f64',
    startDate: '2024-04-12T04:20:54.835Z',
    createdDate: '2024-04-12T04:20:54.835Z',
    updatedDate: '2024-04-12T04:20:54.835Z',
  },
};
export const MockOnlyGetRetrospective: onlyGetRetrospectiveResponse = {
  code: 202,
  message: 'string',
  data: {
    retrospectiveId: 1,
    title: 'heeeeee',
    templateId: 2,
    type: 'TEAM',
    userId: 0,
    leaderName: 'string',
    description: 'string',
    status: Status.NOT_STARTED,
    thumbnail: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  },
};
