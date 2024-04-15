//post
export interface PostImageToS3Request {
  filename: string;
  method: string;
}

export interface PostImageToS3Response {
  filename: string;
  preSignedUrl: string;
}

// 유저 프로필 사진
export interface PutThumbnailRequest {
  thumbnail: string;
}

export interface PutThumbnailResponse {
  userId: number;
  email: string;
  thumbnail: string;
}
