import {
  CreateSectionRequest,
  DeleteSectionRequest,
  DeleteSectionResponse,
  TeamGetSectionRequest,
  GetSectionResponse,
  PostLikeSectionResponse,
  PostLikesSectionRequest,
  PostSectionResponse,
  SectionClient,
  PersonalGetSectionRequest,
  GetSectionCommentsResponse,
  GetSectionCommentsRequest,
} from '../@types/Section';
import axiosInstance from '../axiosConfig';

const ROUTE = 'sections';

export const SectionServices: SectionClient = {
  TeamGet: async (request: TeamGetSectionRequest): Promise<GetSectionResponse> => {
    try {
      const response = await axiosInstance.get<GetSectionResponse>(`${ROUTE}`, { params: request });
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
  PersonalGet: async (request: PersonalGetSectionRequest): Promise<GetSectionResponse> => {
    try {
      const response = await axiosInstance.get<GetSectionResponse>(`${ROUTE}`, { params: request });
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
  create: async (request: CreateSectionRequest): Promise<PostSectionResponse> => {
    try {
      const response = await axiosInstance.post<PostSectionResponse>(`${ROUTE}`, request);
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
  patch: async ({ sectionId, ...request }) => {
    try {
      const response = await axiosInstance.patch(`${ROUTE}/${sectionId}`, request);
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
  delete: async ({ sectionId }: DeleteSectionRequest): Promise<DeleteSectionResponse> => {
    try {
      const response = await axiosInstance.delete<DeleteSectionResponse>(`${ROUTE}/${sectionId}`);
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
  likePost: async ({ sectionId }: PostLikesSectionRequest): Promise<PostLikeSectionResponse> => {
    try {
      const response = await axiosInstance.post<PostLikeSectionResponse>(`${ROUTE}/${sectionId}/likes`);
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
  getComment: async ({ sectionId }: GetSectionCommentsRequest): Promise<GetSectionCommentsResponse> => {
    try {
      const response = await axiosInstance.get<GetSectionCommentsResponse>(`${ROUTE}/${sectionId}/comments`);
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
};
