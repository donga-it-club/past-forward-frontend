import { TeamControllerClient } from '../@types/TeamContoller';
import { mswInstance } from '../client';

const ROUTE = 'teams';

export const TeamControllerServices: TeamControllerClient = {
  get: async ({ teamId, ...request }) => {
    return await mswInstance.get(`${ROUTE}/${teamId}/users`, { params: request });
  },
};
