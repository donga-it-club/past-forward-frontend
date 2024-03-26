export interface RetrospectivesTemplateResponse {
  id: number;
  name: string;
}

export interface retrospectivesTemplateClient {
  getRetrospectivesTemplate(): Promise<RetrospectivesTemplateResponse>;
}
