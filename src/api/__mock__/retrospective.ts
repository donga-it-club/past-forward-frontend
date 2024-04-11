import { Status } from '../@types/@asConst';

export function MockRetrospective() {
  return {
    id: 0,
    title: 'hee',
    teamId: 0,
    userId: 0,
    templateId: 0,
    status: Status.NOT_STARTED,
    isBookmarked: true,
    thumbnail: '3fa85f64',
  };
}
