import {
  GetNoticeListRequest,
  GetNoticeListResponse,
  NoticeBoardClient,
  PostNoticeRequest,
  PostNoticeResponse,
  PostNoticeTempPostsRequest,
  PostNoticeTempPostsResponse,
  PostNoticePresignedURLRequest,
  PostNoticePresignedURLResponse,
  PutNoticeResponse,
  DeleteNoticeRequest,
  GetNoticePostsRequest,
  GetNoticePostsResponse,
} from '../@types/NoticeBoard';
import axiosInstance from '../axiosConfig';

const ROUTE = 'admin/notices';

export const NoticeServices: NoticeBoardClient = {
  listGet: async (request: GetNoticeListRequest): Promise<GetNoticeListResponse> => {
    try {
      const response = await axiosInstance.get<GetNoticeListResponse>(`/posts`, { params: request });
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
  postsGet: async (id: GetNoticePostsRequest): Promise<GetNoticePostsResponse> => {
    try {
      const response = await axiosInstance.get<GetNoticePostsResponse>(`/posts/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
  create: async (request: PostNoticeRequest): Promise<PostNoticeResponse> => {
    try {
      const response = await axiosInstance.post<PostNoticeResponse>(`${ROUTE}/posts`, request);
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
  tempSave: async (request: PostNoticeTempPostsRequest): Promise<PostNoticeTempPostsResponse> => {
    try {
      const response = await axiosInstance.post<PostNoticeTempPostsResponse>(`${ROUTE}/temp-posts`, request);
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
  Img: async (request: PostNoticePresignedURLRequest): Promise<PostNoticePresignedURLResponse> => {
    try {
      const response = await axiosInstance.post<PostNoticePresignedURLResponse>(
        `${ROUTE}/files/presigned-url`,
        request,
      );
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
  revise: async (id, ...request): Promise<PutNoticeResponse> => {
    try {
      const response = await axiosInstance.put<PutNoticeResponse>(`${ROUTE}/posts/${id}`, request);
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
  delete: async ({ id }: DeleteNoticeRequest): Promise<void> => {
    try {
      const response = await axiosInstance.delete(`${ROUTE}/posts/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
};
