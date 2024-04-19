// post
export interface PostSurveyRequest {
  age: number;
  gender: string;
  occupation: string;
  region: string;
  source: string;
  purpose: string;
}

export interface PostSurveyResponse {
  code: number;
  message: string;
  data: string;
}
