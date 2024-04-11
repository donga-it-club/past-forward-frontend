//get
export interface GetSectionRequest {
  retrospectiveId: number;
  teamId?: number;
}

export interface GetSectionResponse {
  code: number;
  message: string;
  data: [
    {
      sectionId: number;
      username: string;
      content: string;
      likeCnt: number;
      sectionName: string;
      createdDate: string;
    },
  ];
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

export interface DeleteSectionRequest {
  sectionId: number;
}

//like
export interface PostLikesSectionRequest {
  userId: number;
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
  get(request: GetSectionRequest): Promise<PostSectionResponse>;
  create(request: CreateSectionRequest): Promise<PostSectionResponse>;
  patch(request: PatchSectionRequest): Promise<PatchSectionResponse>;
  delete(request: DeleteSectionRequest): Promise<void>;
  likePost(request: PostLikesSectionRequest): Promise<PostLikeSectionResponse>;
}
