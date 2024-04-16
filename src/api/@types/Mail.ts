// post
export interface PostMailRequest {
  from: string;
  subject: string;
  content: string;
  mailStatus: string;
}

export interface PostMailResponse {
  code: number;
  message: string;
  data: Record<string, any>;
}
