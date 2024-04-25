// get
export interface GetUsersResponse {
  code: number;
  data: {
    userId: number;
    username: string;
    email: string;
    thumbnail?: string;
    phone: string | null;
    createDate: Date;
    updateDate: Date;
  };
  message: string | null;
}

// put
export interface PutUsersRequest {
  thumbnail: string | null;
  username: string | null;
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
