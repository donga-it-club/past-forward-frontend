//get
export interface GetSectionRequest {
  retrospectiveId: number;
  teamId: number | null;
}

export interface sectionData {
  sectionId: number;
  username: string;
  content: string;
  createdDate: string;
  likeCnt: number;
  sectionName: string;
}

export interface GetSectionResponse {
  code: number;
  error: string;
  data: sectionData[];
}
//post
export interface CreateSectionRequest {
  retrospectiveId: number;
  templateSectionId: number;
  sectionContent: string;
}

export interface PostSectionResponse {
  code: number;
  message: string;
  data: {
    id: number;
    userId: number;
    retrospectiveId: number;
    sectionContent: string;
  };
}

//patch
export interface PatchSectionRequest {
  sectionId: number;
  sectionContent: string;
}

export interface PatchSectionResponse {
  code: number;
  message: string;
  data: {
    sectionId: number;
    content: string;
  };
}

//delete
export interface DeleteSectionRequest {
  sectionId: number;
}

export interface DeleteSectionResponse {
  code: number;
  message: string;
  data: object;
}

//like
export interface PostLikesSectionRequest {
  sectionId: number;
}

export interface PostLikeSectionResponse {
  code: number;
  message: string;
  data: {
    sectionId: number;
    likeCnt: number;
  };
}
export interface SectionClient {
  get(request: GetSectionRequest): Promise<GetSectionResponse>;
  create(request: CreateSectionRequest): Promise<PostSectionResponse>;
  patch(request: PatchSectionRequest): Promise<PatchSectionResponse>;
  delete(request: DeleteSectionRequest): Promise<void>;
  likePost(request: PostLikesSectionRequest): Promise<PostLikeSectionResponse>;
}
