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
