// get
export interface GetRetrospectiveGroupsNodes {
  id: number;
  title: string;
  userId: number;
  userName: string;
  status: string;
  isBookmarked: true;
  thumnail: string | null;
  description: string;
  updatedDate: Date;
}

export interface GetRetrospectiveGroups {
  code: number;
  message: string;
  data: {
    totalCount: number;
    nodes: Array<GetRetrospectiveGroupsNodes>;
  };
}

export interface GetRetrospectiveGroupsRequest {
  page: number;
  size: number;
  status: string;
  keyword: string;
  isBookmarked: boolean;
}

// post
export interface PostRetrospectivesGroupRequest {
  title: string;
  status: string;
  thumbnail: string | null;
  description: string;
}

export interface PostRetrospectivesGroupResponse {
  code: number;
  message: string;
  data: Array<PostRetrospectivesGroupNodes>;
}

export interface PostRetrospectivesGroupNodes {
  id: number;
  title: string;
  userId: number;
  description: string;
  status: string;
  thumbnail: string;
}

// delete
export interface DeleteRetrospectiveRequest {
  retrospectiveGroupId: number;
}

// put
export interface PutRetrospectiveGroupRequest {
  title: string;
  status: string;
  thumbnail: string | null;
  description: string;
}

export interface PutRetrospectiveGroupResponse {
  code: number;
  title: string;
  data: Array<PutRetrospectivesGroupNodes>;
}

export interface PutRetrospectivesGroupNodes {
  id: number;
  title: string;
  userId: number;
  userName: string;
  status: string;
  isBookmarked: boolean;
  thumbnail: string;
  description: string;
  updatedDate: Date | string;
}
