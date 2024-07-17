export interface GetUserResponse {
  code: number;
  message: string;
  data: UserData;
}

export interface UserData {
  userId: number;
  userName: string;
  email: string;
  thumbnail: string;
  phone: string;
  createdDate: string;
  updatedDate: string;
}

export interface PostAdminRequest {
  email: string;
  admin: boolean;
}

export interface UserClient {
  get(): Promise<GetUserResponse>;
  adminPost(reuest: PostAdminRequest): Promise<void>;
}
