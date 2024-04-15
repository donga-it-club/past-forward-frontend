import { TRetrospective, TStatus } from './@asConst';

// get
export interface GetRetrospectiveRequest {
  page: number;
  size: number;
  order: keyof TStatus;
  status: keyof TStatus;
  keyword: string;
  isBookmarked: boolean;
}

export interface GetRetrospectiveData {
  code: number;
  message: string;
  data: {
    totalCount: number;
    nodes: Array<RetrospectiveResponse>;
  };
}

//post
export interface PostRetrospectivesRequest {
  title: string;
  type: keyof TRetrospective;
  userId: number;
  templateId: number;
  status: keyof TStatus;
  thumbnail: string;
  startDate: string;
  description: string;
}

export interface PostRetrospectivesResponse {
  id: number;
  title: string;
  userId: number;
  templateId: number;
  status: keyof TStatus;
  thumbnail: string;
  description: string;
}

//delete
export interface DeleteRetrospectiveRequest {
  retrospectiveId: number;
}

//put
export interface PutRetrospectiveRequest {
  retrospectiveId: number;
  title: string;
  teamId?: number;
  description: string;
  status: keyof TStatus;
  thumbnail?: string;
}

export interface RetrospectiveResponse {
  code: number;
  message: string;
  data: {
    id: number;
    title: string;
    userId: number;
    teamId: number;
    templateId: number;
    status: keyof TStatus;
    isBookmarked: boolean;
    thumbnail: string;
    startDate: string;
    createdDate: string;
    updatedDate: string;
  };
}

export interface RetrospectivesClient {
  create(request: PostRetrospectivesRequest): Promise<PostRetrospectivesResponse>;
  get(request: GetRetrospectiveRequest): Promise<GetRetrospectiveData>;
  delete(request: DeleteRetrospectiveRequest): Promise<void>;
  put(request: PutRetrospectiveRequest): Promise<RetrospectiveResponse>;
}
