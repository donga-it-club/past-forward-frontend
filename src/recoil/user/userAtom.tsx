import { atom } from 'recoil';

export const userNicknameState = atom<string | null>({
  key: 'userNicknameState',
  default: null,
});
