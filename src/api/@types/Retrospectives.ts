import { Order, Status } from './@enums';

export interface RetrospectiveData {
  title: string;
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

export interface NodeData extends RetrospectiveData {
  id: number;
  userId: number;
  isBookmarked: boolean;
}

export interface GetRetrospectiveData {
  totalCount: number;
  nodes: Array<NodeData>;
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
  create(request: RetrospectiveData): Promise<PostRetrospectivesResponse>;
  get(request: GetRetrospectiveRequest): Promise<GetRetrospectiveResponse>;
  delete(request: DeleteRetrospectiveRequest): Promise<void>;
  put(request: PutRetrospectiveRequest): Promise<GetRetrospectiveResponse>;
}
