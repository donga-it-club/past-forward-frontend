import { Order, Status } from './@enums';

export interface RetrospectiveData {
  title: string;
  teamId: number;
  templateId: number;
  status: Status;
  thumbnail: string;
}

export interface PostRetrospectivesResponse {
  code: string;
  message: string;
  data: GetRetrospectiveData;
}

// get
export interface GetRetrospectiveRequest {
  page: number;
  size: number;
  order: Order;
  status: Status;
  keyword: string;
  isBookmarked: boolean;
}

export interface NodeData {
  id: number;
  title: string;
  userId: number;
  teamId: number;
  templateId: number;
  status: Status;
  isBookmarked: boolean;
  thumbnail: string;
}

export interface GetRetrospectiveData {
  totalCount: number;
  nodes: NodeData;
}

export interface GetRetrospectiveResponse {
  code: number;
  message: string;
  data: GetRetrospectiveData;
}

export interface DeleteRetrospectiveRequest {
  id: number;
}

export interface PutRetrospectiveRequest {
  id: number;
  title: string;
  teamId: string;
  userId: number;
  description: string;
  status: Status;
  thumbnail: string | null;
}

export interface RetrospectivesClient {
  post(request: RetrospectiveData): Promise<PostRetrospectivesResponse>;
  get(request: GetRetrospectiveRequest): Promise<GetRetrospectiveResponse>;
  delete(request: DeleteRetrospectiveRequest): Promise<void>;
  put(request: PutRetrospectiveRequest): Promise<GetRetrospectiveResponse>;
}
