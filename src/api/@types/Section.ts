//get
export interface GetSectionRequest {
  retrospectiveId: number;
  teamdId: number;
}

export interface GetSectionResponse {
  sectionId: number;
  username: string;
  content: string;
  likeCnt: number;
  sectionName: string;
  createdDate: string;
}

//post
export interface CreateSectionRequest {
  userId: number;
  retrospectiveId: number;
  templateSectionId: number;
  sectionContent: string;
}

export interface PostSectionResponse {
  id: number;
  userId: number;
  retrospectiveId: number;
  sectionContent: string;
}

//patch
export interface PatchSectionRequest {
  userId: number;
  sectionId: number;
  sectionContent: string;
}

export interface PatchSectionResponse {
  sectionId: number;
  content: string;
}

export interface DeleteSectionRequest {
  sectionId: number;
}

//like
export interface PostLikesSectionRequest {
  userId: number;
}

export interface PostLikeSectionResponse {
  sectionId: number;
  likeCnt: number;
}
export interface SectionClient {
  get(request: GetSectionRequest): Promise<PostSectionResponse>;
  create(request: CreateSectionRequest): Promise<PostSectionResponse>;
  patch(request: PatchSectionRequest): Promise<PatchSectionResponse>;
  delete(request: DeleteSectionRequest): Promise<void>;
  likePost(request: PostLikesSectionRequest): Promise<PostLikeSectionResponse>;
}
