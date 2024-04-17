// get
export interface GetUsersRequest {
  // userId: number;
}

export interface GetUsersResponse {
  userId: number;
  username: string;
  email: string;
  thumbnail: string | null;
  phone: string | null;
  createDate: Date;
  updateDate: Date;
}
