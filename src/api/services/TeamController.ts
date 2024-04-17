import { GetTeamMembersRequest, TeamControllerClient } from '../@types/TeamController';
import axiosInstance from '../axiosConfig';

const ROUTE = 'teams';

export const TeamControllerServices: TeamControllerClient = {
  get: async ({ teamId, ...request }: GetTeamMembersRequest) => {
    try {
      const response = await axiosInstance.get(`${ROUTE}/${teamId}/users`, { params: request });
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
};
