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

export interface SectionClient {
  get(): Promise<SectionResponse>;
  create(request: CreateSectionRequest): Promise<SectionResponse>;
}
