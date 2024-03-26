export interface RetrospectivesTemplateResponse {
  id: number;
  name: string;
}

export interface retrospectivesTemplateClient {
  get(): Promise<RetrospectivesTemplateResponse>;
}
