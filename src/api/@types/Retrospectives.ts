import { Status } from './@enums';

export interface RetrospectiveRequest {
  title: string;
  teamId: number;
  templateId: number;
  status: Status;
  thumbnail: string;
}

export interface RetrospectivesResponse {
  code: string;
  message: string;
  data: RetrospectiveRequest;
}

export interface RetrospectivesClient {
  postRetrospectives(request: RetrospectiveRequest): Promise<RetrospectivesResponse>;
}
