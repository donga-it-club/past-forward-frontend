export interface CreateSectionRequest {
  userId: number;
  retrospectiveId: number;
  templateSectionId: number;
  sectionContent: string;
}

export interface SectionResponse {
  id: number;
  userId: number;
  retrospectiveId: number;
  sectionContent: string;
}

export interface PatchSectionRequest {
  sectionId: number;
  userId: number;
  sectionContent: string;
}

export interface PatchSectionResponse {
  sectionId: number;
  content: string;
}

export interface DeleteSectionRequest {
  sectionId: number;
}

export interface PostLikesSectionRequest {
  userId: number;
}

export interface PostLikeSectionResponse {
  sectionId: number;
  likeCnt: number;
}
export interface SectionClient {
  get(): Promise<SectionResponse>;
  create(request: CreateSectionRequest): Promise<SectionResponse>;
  patch(request: PatchSectionRequest): Promise<PatchSectionResponse>;
  delete(request: DeleteSectionRequest): Promise<void>;
  likePost(request: PostLikesSectionRequest): Promise<PostLikeSectionResponse>;
}
