import { TRetrospective, TStatus, TOrder } from './@asConst';

//onlyGet
export interface onlyGetRetrospectiveRequest {
  retrospectiveId: number;
}

export interface onlyGetRetrospectiveResponse {
  code: number;
  message: string;
  data: RetrospectiveData;
}

export interface RetrospectiveData {
  retrospectiveId: number;
  title: string;
  templateId: number;
  type: keyof TRetrospective;
  userId: number;
  leaderName: string;
  description: string;
  status: string;
  thumbnail: string;
  leaderProfileImage: string | null;
}

// get
export interface GetRetrospectiveRequest {
  page: number;
  size: number;
  order: keyof TOrder;
  status: keyof TStatus;
  keyword: string;
  isBookmarked: boolean;
}

export interface GetRetrospectiveResponseNodes {
  // 추가
  id: number;
  title: string;
  userId: number;
  teamId: number | null;
  templateId: number;
  status: keyof TStatus;
  isBookmarked: boolean;
  thumbnail: string;
  startDate: string;
  createdDate: string;
  updatedDate: string;
  username: string;
}

export interface GetRetrospectiveData {
  code: number;
  message: string;
  data: {
    totalCount: number;
    nodes: Array<GetRetrospectiveResponseNodes>; //RetrospectiveResponse 에서 변경
  };
}
//post
export interface PostRetrospectivesRequest {
  title: string;
  type: keyof TRetrospective;
  userId: number;
  templateId: number | null;
  status: keyof TStatus;
  thumbnail: string | null;
  startDate: Date | string;
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
export interface PutTeamRetrospectiveRequest {
  retrospectiveId: number;
  title: string;
  teamId?: number;
  description: string;
  status: string;
  thumbnail?: string | null;
}

export interface PutPersonalRetrospectiveRequest {
  retrospectiveId: number;
  title: string;
  description: string;
  status: string;
  thumbnail?: string | null;
}

export interface RetrospectiveResponse {
  code: number;
  message: string;
  data: {
    id: number;
    title: string;
    userId: number;
    teamId: number | null;
    templateId: number;
    status: keyof TStatus;
    isBookmarked: boolean;
    thumbnail: string;
    startDate: string;
    createdDate: string;
    updatedDate: string;
  };
}

export interface PatchRetrospectiveRequest {
  retrospectiveId: number;
  // userId: number;
}

export interface PatchRetrospectiveResponse {
  code: number;
  message: string;
  data: boolean;
}

export interface PostTransferLeaderRequest {
  newLeaderId: number;
  retrospectiveId: number;
}

export interface PostTransferLeaderResponse {
  code: number;
  message: string;
}

export interface LeaderData {
  id: number;
  title: string;
  teamId: number;
  userId: number;
  templateId: number;
  status: keyof TStatus;
  thumbnail: string;
  startedDate: string;
  description: string;
}

export interface RetrospectivesClient {
  onlyGet(request: onlyGetRetrospectiveRequest): Promise<onlyGetRetrospectiveResponse>;
  create(request: PostRetrospectivesRequest): Promise<PostRetrospectivesResponse>;
  get(request: GetRetrospectiveRequest): Promise<GetRetrospectiveData>;
  delete(request: DeleteRetrospectiveRequest): Promise<void>;
  put(request: PutTeamRetrospectiveRequest): Promise<RetrospectiveResponse>;
  leaderPost(request: PostTransferLeaderRequest): Promise<PostTransferLeaderResponse>;
  patch(request: PatchRetrospectiveRequest): Promise<PatchRetrospectiveResponse>;
}
