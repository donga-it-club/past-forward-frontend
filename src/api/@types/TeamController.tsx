export interface GetTeamMembersRequest {
  teamId: number;
  retrospectiveId: number;
}

export interface GetTeamMembersResponse {
  code: number;
  message: string;
  data: TeamMembersData[];
}

export interface TeamMembersData {
  userId: number;
  username: string;
  profileImage: string;
}

export interface TeamControllerClient {
  get(request: GetTeamMembersRequest): Promise<GetTeamMembersResponse>;
}
