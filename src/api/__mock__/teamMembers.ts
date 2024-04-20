import { GetTeamMembersResponse } from '../@types/TeamController';

export const MockTeamMembers: GetTeamMembersResponse = {
  code: 1,
  message: 'no',
  data: [
    { userId: 1, username: 'gg', profileImage: 'gggg', email: 'test@gmail.com', joinedAt: '2024-04-18T13:59:52.739Z' },
    { userId: 1, username: 'ff', profileImage: 'gggg', email: 'test@gmail.com', joinedAt: '2024-04-18T13:59:52.739Z' },
  ],
};
