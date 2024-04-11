export interface RetrospectivesTemplateResponse {
  code: number;
  message: string;
  data: [{ id: number; name: string }];
}

export interface retrospectivesTemplateClient {
  get(): Promise<RetrospectivesTemplateResponse>;
}
