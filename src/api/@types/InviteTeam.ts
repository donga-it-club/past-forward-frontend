// get
export interface GetInviteTeamRequest {
  // teamId: number;
}

export interface GetInviteTeamResponse {
  code: number;
  message: string;
  data: InviteTeamData;
}

export interface InviteTeamData {
  invitationCode: string;
  invitationUrl: string;
  expirationTime: string;
  qrCodeImage: string;
}

// post
export interface PostInviteTeamRequest {
  invitationCode: string;
}
