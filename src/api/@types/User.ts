// get
export interface GetUsersResponse {
  code: number;
  data: {
    userId: number;
    userName: string;
    email: string;
    thumbnail: string | null;
    phone: string | null;
    createDate: Date;
    updateDate: Date;
  };
  message: string | null;
}

// put
export interface PutUsersRequest {
  thumbnail: string | null;
  username: string;
}

export interface PutUsersResponse {
  code: number;
  data: {
    userId: number;
    email: string;
    thumbnail: string;
    username: string;
  };
}
