import { TStatus } from '../@types/@asConst';

export function MockRetrospective(Status: TStatus) {
  return {
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
          status: Status.PREVIOUSLY,
          isBookmarked: true,
          thumbnail: '3fa85f64',
        },
      ],
    },
  };
}
