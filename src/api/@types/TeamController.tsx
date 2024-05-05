// 팀원 조회
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
  email: string;
  joinedAt: string;
}

export interface AddedImageTeamMember extends TeamMembersData {
  image: string;
}

//getTemplateName
export interface GetTemplateNameRequest {
  templateId: number;
}

export interface GetTemplateNameResponse {
  code: number;
  message: string;
  data: TemplateNameData[];
}

export interface TemplateNameData {
  id: number;
  name: string;
  templateId: number;
  sequence: number;
}

// put 담당자
export interface PutActionItemsRequest {
  teamId: number;
  retrospectiveId: number;
  sectionId: number;
  userId: number;
}

export interface PutActionItemsResponse {
  code: number;
  message: string;
  data: object;
}

//delete
export interface DeleteTeamMembersRequest {
  teamId: number;
  userId: number;
}

export interface DeleteTeamMembersResponse {
  code: number;
}
export interface TeamControllerClient {
  TeamMemberGet(request: GetTeamMembersRequest): Promise<GetTeamMembersResponse>;
  TemplateNameGet(request: GetTemplateNameRequest): Promise<GetTemplateNameResponse>;
  ActionItemsMemberPut(request: PutActionItemsRequest): Promise<PutActionItemsResponse>;
  DeleteTeamMembers(request: DeleteTeamMembersRequest): Promise<DeleteTeamMembersResponse>;
}
