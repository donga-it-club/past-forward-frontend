import {
  GetTeamMembersRequest,
  GetTemplateNameRequest,
  GetTemplateNameResponse,
  TeamControllerClient,
  PutActionItemsRequest,
  PutActionItemsResponse,
  DeleteTeamMembersResponse,
} from '@/api/@types/TeamController';
import axiosInstance from '@/api/axiosConfig';

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
  ActionItemsMemberPut: async (request: PutActionItemsRequest): Promise<PutActionItemsResponse> => {
    try {
      const response = await axiosInstance.put(`/sections/action-itmes`, request);
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
  DeleteTeamMembers: async ({ teamId, userId }): Promise<DeleteTeamMembersResponse> => {
    try {
      const response = await axiosInstance.delete(`${TEAMS_ROUTE}/${teamId}/users/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
};
