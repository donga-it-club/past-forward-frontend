//get
export interface TeamGetSectionRequest {
  retrospectiveId: number;
  teamId: number | null;
}

export interface PersonalGetSectionRequest {
  retrospectiveId: number;
}

export interface sectionData {
  sectionId: number;
  username: string;
  content: string;
  likeCnt: number;
  sectionName: string;
  createdDate: string;
  thumbnail: string;
  comments: CommentData[];
  actionItems?: ActionItemData;
}

export interface ActionItemData {
  userId: number;
  username: string;
  thumbnail: string;
}

export interface CommentData {
  commentId: number;
  content: string;
  username: string;
  thumbnail: string;
}

export interface AddedImageCommentData extends CommentData {
  image: string;
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
  data: PostSectionData;
}

export interface PostSectionData {
  id: number;
  userId: number;
  retrospectiveId: number;
  sectionContent: string;
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

export interface GetSectionCommentsRequest {
  sectionId: number;
}

export interface GetSectionCommentsResponse {
  code: number;
  message: string;
  data: CommentData[];
}

export interface SectionClient {
  get(request: TeamGetSectionRequest): Promise<GetSectionResponse>;
  create(request: CreateSectionRequest): Promise<PostSectionResponse>;
  patch(request: PatchSectionRequest): Promise<PatchSectionResponse>;
  delete(request: DeleteSectionRequest): Promise<DeleteSectionResponse>;
  likePost(request: PostLikesSectionRequest): Promise<PostLikeSectionResponse>;
  getComment(request: GetSectionCommentsRequest): Promise<GetSectionCommentsResponse>;
}
