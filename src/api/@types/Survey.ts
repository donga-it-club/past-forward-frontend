// post
export interface PostSurveyRequest {
  age: number;
  gender: string;
  occupation: string;
  region: string;
  source: string;
  purposes: string[] | undefined;
  emailConsents: boolean;
}

export interface PostSurveyResponse {
  code: number;
  message: string;
  data: string;
}
