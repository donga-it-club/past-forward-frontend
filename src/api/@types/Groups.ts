// get all groups
export interface GetRetrospectiveGroupsNodes {
  id: number;
  title: string;
  userId: number;
  userName: string;
  status: string;
  isBookmarked: boolean;
  thumbnail: string | null;
  description: string;
  updateDate: Date;
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
  retrospectiveGroupId: number;
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

// get a group including retrospectives
export interface GetRetrospectiveGroupRequest {
  retrospectiveGroupId: number;
}

export interface GetRetrospectiveGroupResponse {
  code: number;
  message: string | null;
  data: {
    title: string;
    userId: number;
    userName: string;
    description: string;
    thumbnail: string | null;
    status: string;
    id: number;
    retrospectives: GetRetrospectiveGroupNodes[];
  };
}

export interface GetRetrospectiveGroupNodes {
  id: number;
  title: string;
  userId: number;
  username: string;
  teamId: number;
  templateId: number;
  status: string;
  isBookmarked: boolean | null;
  thumbnail: string | null;
  description: string;
  startDate: Date;
  createdDate: Date;
  updatedDate: Date;
}

// put - update group boards
export interface PutRetrospectiveGroupBoardRequest {
  retrospectiveGroupId: number;
  retrospectiveIds: number[];
}

export interface PutRetrospectiveGroupBoardResponse {
  code: number;
  message: string;
  data: {
    id: number;
    title: string;
    userId: number;
    userName: string;
    status: string;
    isBookmarked: boolean;
    thumbnail: string | null;
    description: string;
    updateDate: Date;
  };
}
