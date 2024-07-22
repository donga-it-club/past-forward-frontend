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
  administrator: boolean;
}

// post
export interface PostUserRequest {
  email: string;
  admin: boolean;
}

export interface UserClient {
  get(): Promise<GetUserResponse>;
  post(request: PostUserRequest): Promise<void>;
}
