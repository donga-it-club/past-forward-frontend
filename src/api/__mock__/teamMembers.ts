import { GetTeamMembersResponse, TeamMembersData } from '../@types/TeamController';

export const MockTeamMembers: GetTeamMembersResponse = {
  code: 1,
  message: 'no',
  data: [
    { userId: 1, username: 'gg', profileImage: 'gggg' },
    { userId: 1, username: 'ff', profileImage: 'gggg' },
  ],
};

export const MockTeamMembersData: TeamMembersData[] = [
  { userId: 1, username: 'gg', profileImage: 'gggg' },
  { userId: 1, username: 'ff', profileImage: 'gggg' },
];
