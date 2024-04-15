export interface RetrospectivesTemplateResponse {
  code: number;
  message: string | null;
  data: Array<{
    id: number;
    name: string;
  }>;
}

export interface retrospectivesTemplateClient {
  get(): Promise<RetrospectivesTemplateResponse>;
}
