import {
  GetTeamMembersRequest,
  GetTemplateNameRequest,
  GetTemplateNameResponse,
  TeamControllerClient,
  PutActionItemsRequest,
  PutActionItemsResponse,
} from '../@types/TeamController';
import axiosInstance from '../axiosConfig';

const TEAMS_ROUTE = 'teams';
const TEMPLATE_ROUTE = 'retrospective-templates';

export const TeamControllerServices: TeamControllerClient = {
  TeamMemberGet: async ({ teamId, ...request }: GetTeamMembersRequest) => {
    try {
      const response = await axiosInstance.get(`${TEAMS_ROUTE}/${teamId}/users`, { params: request });
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
  TemplateNameGet: async ({ templateId }: GetTemplateNameRequest): Promise<GetTemplateNameResponse> => {
    try {
      const response = await axiosInstance.get(`${TEMPLATE_ROUTE}/${templateId}/template-sections`);
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
  ActionItemsMemberPatch: async (request: PutActionItemsRequest): Promise<PutActionItemsResponse> => {
    try {
      const response = await axiosInstance.patch(`/sections/action-itmes`, request);
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
};
