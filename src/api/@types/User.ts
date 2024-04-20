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
